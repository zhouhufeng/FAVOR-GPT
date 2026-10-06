# FAVOR-GPT

FAVOR-GPT is a conversational assistant for the [FAVOR](https://favor.genohub.org/) variant annotation database. It answers questions about variants, rsIDs, genes and genomic regions by calling the FAVOR API and links each answer back to the corresponding FAVOR page.

**Live version:** FAVOR-GPT runs at **[favor.genohub.org](https://favor.genohub.org/)**. Use it there.

> **Note:** This repository is an early (2024) snapshot of the chat backend and is not maintained. The deployed version at favor.genohub.org has since been updated (newer Vercel AI SDK and other changes) and differs from the code here. The files are kept for reference only; on their own they do not form a runnable app.

## Contents

| File | Purpose |
| --- | --- |
| `route.ts` | Next.js `/api/chat` route: system prompt, per-IP rate limiting (Upstash / Vercel KV), OpenAI streaming with function calling |
| `functions.ts` | Function definitions and handlers that query the FAVOR API (`api.genohub.org/v1`): variants, rsIDs, gene info and summaries, region summaries, gene/region variant lists, field descriptions |
| `description.ts` | Glossary of FAVOR annotation fields used by `fetchFieldDescription` |
| `package.json` | Dependencies from the original project |

