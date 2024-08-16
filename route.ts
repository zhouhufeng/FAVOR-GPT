import {
  experimental_StreamData,
  OpenAIStream,
  StreamingTextResponse,
} from "ai";
import OpenAI from "openai";
import { Ratelimit } from "@upstash/ratelimit";
import { callFunction, functions } from "~/app/api/chat/functions";
import { kv } from "@vercel/kv";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const maxDuration = 300;

export async function POST(req: Request) {
  const json = (await req.json()) as {
    id?: string;
    messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
  };

  const ip = req.headers.get("x-forwarded-for");

  const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.fixedWindow(4, "120s"),
  });

  const { success, limit, reset, remaining } = await ratelimit.limit(
    `ratelimit_${ip}`,
  );

  if (!success) {
    return new Response(
      "Sorry, you have exceeded the allowed request limit. please try again in a few minutes.",
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      },
    );
  }

  const history: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "Please use our FAVOR database, which you can access using functions to answer the following questions. If you aren't using a function to support your responses, make sure you don't make false claims unless you are 100% sure. In your responses, please end with a hyperlink that matches what is given to you from the input context. Don't EVER give examples of variants unless EXPLICITLY asked.",
    },
    {
      role: "system",
      content:
        "Make all responses concise and short, and avoid going beyond 1 paragraph responses unless needed.",
    },
    {
      role: "system",
      content:
        "When listing variants in genes or regions, please only list the basic information (e.g. variant_vcf, rsid, bravo_an, bravo_ac)",
    },
    {
      role: "system",
      content:
        "For gene queries, there will be three categories that is total information(SNV+indel), just SNV, and just indel. Make sure you don't mix this up as the first one is always the total.",
    },
  ];

  const { messages } = json;

  const currentMessage = messages[messages.length - 1]?.content || "";

  history.push(...messages);

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: history,
    functions: functions,
  });

  const data = new experimental_StreamData();
  const stream = OpenAIStream(res, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages,
    ) => {
      if (name) {
        const functionResult = await callFunction(
          {
            name,
            arguments: JSON.stringify(args),
          },
          currentMessage.toString(),
        );
        if (functionResult.url) {
          data.append({
            text: `Hyperlink to be put at the end: [${functionResult.url}](${functionResult.url})`,
          });
        }

        data.append({
          text: `Information for ${name}: ${functionResult.data}`,
        });

        const newMessages = createFunctionCallMessages({
          functionResult,
        }) as OpenAI.Chat.Completions.ChatCompletionMessageParam[];

        return openai.chat.completions.create({
          messages: [...history, ...newMessages],
          stream: true,
          model: "gpt-4o-2024-05-13",
        });
      }
    },

    onCompletion(completion) {
      console.log("completion", completion);
    },

    onFinal(completion) {
      data.close();
    },

    experimental_streamData: true,
  });

  return new StreamingTextResponse(stream, {}, data);
}
