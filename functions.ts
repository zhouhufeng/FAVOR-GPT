import OpenAI from "openai";
import { variantInfo } from "~/app/api/chat/description";
import weaviate from "weaviate-client";
import { WeaviateClient } from "weaviate-client";

export const functions: OpenAI.Chat.ChatCompletionCreateParams.Function[] = [
  {
    name: "fetchFieldDescription",
    description:
      "description queries the database for a specific field and returns the description of the field",
    parameters: {
      type: "object",
      properties: {
        field: {
          type: "string",
          description:
            "The field for a variant, e.g., variant_vcf, Allele Origin, GNOMAD Total AF, etc.",
        },
      },
    },
  },
  {
    name: "fetchVariant",
    description:
      "fetchVariant queries the database for a specific variant and returns the variant information",
    parameters: {
      type: "object",
      properties: {
        variant: {
          type: "string",
          description:
            "The variant_vcf for a variant, e.g., 19-44908822-C-T, 19-44909305-C-CGCAGCCT, 19-44909249-G-GA, 19-44909003-TGGA-T",
        },
      },
    },
  },
  {
    name: "fetchRsid",
    description:
      "fetchRsid queries the database for a specific rsid and returns the rsid information",
    parameters: {
      type: "object",
      properties: {
        rsid: {
          type: "string",
          description:
            "The rsid for a variant, e.g., rs7421, rs80359529, rs80359529, etc.",
        },
      },
    },
  },
  {
    name: "fetchGeneInfo",
    description:
      "fetchGeneInfo queries the database for a specific gene and returns information about the gene, such as medical descriptions. Only use for answering descriptive questions.",
    parameters: {
      type: "object",
      properties: {
        gene: {
          type: "string",
          description: "The gene for a variant, e.g., BRCA1, BRCA2, TP53, etc.",
        },
      },
    },
  },
  {
    name: "fetchGeneSummary",
    description:
      "fetchGeneSummary queries the database for a specific gene and returns gene summary. e.g. number of variants, number of pathogenic variants. The response is separated into three parts. The first part describes the TOTAL for the entire gene, the second part desribes ONLY the SNV, and the last part describes ONLY the INDEL.",
    parameters: {
      type: "object",
      properties: {
        gene: {
          type: "string",
          description: "The gene, e.g., APOE, BRCA1, MYC, BRCA2, TP53, etc.",
        },
      },
    },
  },
  {
    name: "fetchRegionSummary",
    description:
      "fetchRegionSummary queries the database for a specific region and returns summary of the region.  e.g. number of variants, no of lowfreq, singletons, doubletons variants, etc.",
    parameters: {
      type: "object",
      properties: {
        region: {
          type: "string",
          description:
            "The region for a variant, e.g., 19-44908822-44909305, 19-44909003-44909249, etc.",
        },
      },
    },
  },
  {
    name: "fetchRegionSNVSummary",
    description:
      "fetchRegionSNVSummary returns only the SNV summary of the region",
    parameters: {
      type: "object",
      properties: {
        region: {
          type: "string",
          description:
            "The region for a variant, e.g., 19-44908822-44909305, 19-44909003-44909249, etc.",
        },
      },
    },
  },
  {
    name: "fetchRegionIndelSummary",
    description:
      "fetchRegionIndelSummary returns only the Indel summary of the region",
    parameters: {
      type: "object",
      properties: {
        region: {
          type: "string",
          description:
            "The region for a variant, e.g., 19-44908822-44909305, 19-44909003-44909249, etc.",
        },
      },
    },
  },
  {
    name: "fetchGeneVariants",
    description:
      "fetchGeneVariants returns list of variants and their information for the gene. ONLY EVER USE THIS FUNCTION WHEN THE USER ASKS FOR A LIST OF VARIANTS IN A GENE",
    parameters: {
      type: "object",
      properties: {
        gene: {
          type: "string",
          description:
            "The gene, e.g., APOE, BRCA1, MYC, PTPRD, BRCA2, TP53, etc.",
        },
        page: {
          type: "number",
          description:
            "The page number for the gene, e.g., 1, 2, 3, etc. (default: 1)",
        },
        filtersQuery: {
          type: "string",
          description:
            "Filters are: genecode_comprehensive_category and clnsig. Valid values for genecode_comprehensive_category are: exonic, ncrna, intronic, downstream, intergenic, upstream, splicing, utr. Valid values for clnsig are: drugresponse, pathogenic, likelypathogenic, benign, likelybenign, conflicting, unknown. To create a filtersQuery string use this format: 'genecode_comprehensive_category=exonic,utr' (there can be multiple values to filter by), 'clnsig=pathogenic'.",
        },
        sortBy: {
          type: "string",
          description:
            "The parameter to sort the variants by. Valid values are: position, -position, bravo_an, -bravo_an, bravo_ac, -bravo_ac, bravo_af, -bravo_af, cadd_phred, -cadd_phred, linsight, -linsight, fathmm_xf, -fathmm_xf, apc_conservation_v2, -apc_conservation_v2, apc_epigenetics_active, -apc_epigenetics_active, apc_epigenetics_repressed, -apc_epigenetics_repressed, apc_epigenetics_transcription, -apc_epigenetics_transcription, apc_local_nucleotide_diversity_v3, -apc_local_nucleotide_diversity_v3, apc_mappability, -apc_mappability, apc_mutation_density, -apc_mutation_density, apc_protein_function_v3, -apc_protein_function_v3, apc_transcription_factor, -apc_transcription_factor, af_total, -af_total, tg_all, -tg_all, af_eas, -af_eas, af_sas, -af_sas, af_afr, -af_afr, af_amr, -af_amr, af_eur, -af_eur. Negative values mean descending order.",
        },
      },
    },
  },
  {
    name: "fetchRegion",
    description:
      "fetchRegion returns list of variants and their information for the region",
    parameters: {
      type: "object",
      properties: {
        region: {
          type: "string",
          description:
            "The region for a variant, e.g., 19-44908822-44909305, 19-44909003-44909249, etc.",
        },
        page: {
          type: "number",
          description:
            "The page number for the region, e.g., 1, 2, 3, etc. (default: 1)",
        },
      },
    },
  },
];

export async function callFunction(
  function_call: OpenAI.Chat.ChatCompletionMessage.FunctionCall,
  currentMessage: string,
): Promise<any> {
  const args = JSON.parse(function_call.arguments!) as {
    [key: string]: string;
  };

  switch (function_call.name) {
    case "fetchFieldDescription":
      return await fetchFieldDescription(args["field"]);
    case "fetchVariant":
      return await fetchVariant(args["variant"]);
    case "fetchRsid":
      const rsidResult = await fetchRsid(args["rsid"]);
      return {
        data: rsidResult,
        url: `https://favor.genohub.org/hg38/rsid/${args["rsid"]}/summary/basic`,
      };
    case "fetchGeneInfo":
      const geneInfo = await fetchGeneInfo(args["gene"], currentMessage);
      return {
        info: geneInfo,
        url: 'https://favor.genohub.org/hg38/gene/${args["gene"]}/gene-level-annotation/info-and-ids',
      };
    case "fetchGeneSummary":
      const geneResult = await fetchGeneSummary(args["gene"]);
      return {
        data: geneResult,
        url: `https://favor.genohub.org/hg38/gene/${args["gene"]}/gene-level-annotation/info-and-ids`,
      };
    case "fetchRegionSummary":
      return await fetchRegionSummary(args["region"]);
    case "fetchRegionSNVSummary":
      return await fetchRegionSNVSummary(args["region"]);
    case "fetchRegionIndelSummary":
      return await fetchRegionIndelSummary(args["region"]);
    case "fetchGeneVariants":
      // @ts-ignore
      return await fetchGeneVariants(
        args["gene"],
        args["page"],
        args["filtersQuery"],
        args["sortBy"],
      );
    case "fetchRegion":
      // @ts-ignore
      return await fetchRegion(args["region"], args["page"]);
    default:
      return "Sorry, I did not understand your question. Please try again.";
  }
}

async function fetchFieldDescription(field: string | undefined) {
  // @ts-ignore
  const closestMatch = approximateMatch(variantInfo, field);
  if (closestMatch === null) {
    return "Sorry, I did not understand your question. Please try again.";
  }

  return variantInfo[closestMatch];
}

async function fetchVariant(variant: string | undefined) {
  const response = await fetch(
    `https://api.genohub.org/v1/variants/${variant}`,
  );
  const json = await response.json();

  return {
    data: json,
    url: `https://favor.genohub.org/hg38/variant/${variant}/summary/basic`,
  };
}

async function fetchRsid(rsid: string | undefined) {
  const response = await fetch(`https://api.genohub.org/v1/rsids/${rsid}`);
  const json = await response.json();

  return {
    data: json,
    url: `https://favor.genohub.org/hg38/rsid/${rsid}/summary/basic`,
  };
}

const client: WeaviateClient = await weaviate.connectToWeaviateCloud(
  process.env.WEAVIATE_CLUSTER_URL || "",
  {
    authCredentials: new weaviate.ApiKey(process.env.WEAVIATE_API_KEY || ""),
    headers: {
      "X-Openai-Api-Key": process.env.OPENAI_API_KEY || "",
    },
    timeout: { init: 30, query: 60, insert: 120 },
    skipInitChecks: true,
  },
);

async function fetchGeneInfo(gene: string | undefined, query: string) {
  const info = client.collections.get("GeneInfo");

  const response = await info.query.nearText(query, {
    limit: 3,
    filters: info.filter.byProperty("symbol").equal(gene),
  });

  return {
    url: `https://favor.genohub.org/hg38/gene/${gene}/gene-level-annotation/info-and-ids`,
    info: response.objects[0]?.properties,
  };
}

async function fetchGeneSummary(gene: string | undefined) {
  const responseRegular = await fetch(
    `https://api.genohub.org/v1/genes/${gene}/summary`,
  );
  const regularSummary = await responseRegular.json();

  const responseSNV = await fetch(
    `https://api.genohub.org/v1/genes/${gene}/summary/snv`,
  );
  const snvSummary = await responseSNV.json();

  const responseIndel = await fetch(
    `https://api.genohub.org/v1/genes/${gene}/summary/indel`,
  );
  const indelSummary = await responseIndel.json();

  return {
    total: regularSummary,
    snv: snvSummary,
    indel: indelSummary,
    url: `https://favor.genohub.org/hg38/gene/${gene}/gene-level-annotation/info-and-ids`,
  };
}

async function fetchRegionSummary(region: string | undefined) {
  const response = await fetch(
    `https://api.genohub.org/v1/regions/${region}/summary`,
  );
  const json = await response.json();

  return json;
}

async function fetchRegionSNVSummary(region: string | undefined) {
  const response = await fetch(
    `https://api.genohub.org/v1/regions/${region}/snv/summary`,
  );
  const json = await response.json();

  return json;
}

async function fetchRegionIndelSummary(region: string | undefined) {
  const response = await fetch(
    `https://api.genohub.org/v1/regions/${region}/indel/summary`,
  );
  const json = await response.json();

  return json;
}

async function fetchRegion(region: string | undefined, page: number = 1) {
  const limit = 10;
  const response = await fetch(`https://api.genohub.org/v1/regions/${region}`);
  const json = await response.json();
  const data = json.slice((page - 1) * limit, page * limit);

  return {
    data,
    page,
    limit,
    total: json.length,
  };
}

async function fetchGeneVariants(
  gene: string | undefined,
  page = 1,
  filtersQuery = "",
  sortBy = "",
) {
  const limit = 10;
  const baseUrl = `https://api.genohub.org/v1/genes/${gene}`;
  const urlParams = [];

  if (page) {
    urlParams.push(`page=${page}`);
  }

  if (limit) {
    urlParams.push(`limit=${limit}`);
  }

  if (filtersQuery) {
    urlParams.push(filtersQuery);
  }

  if (sortBy) {
    urlParams.push(`sort=${sortBy}`);
  }

  const queryString = urlParams.join("&");
  const url = `${baseUrl}?${queryString}`;
  const response = await fetch(url);
  const json = await response.json();

  console.log(url);
  return {
    data: json,
    page,
    limit,
    total: json.count,
  };
}

const levenshteinDistance = (a: string, b: string): number => {
  const c = a.length + 1;
  const d = b.length + 1;
  const r = Array(c);
  for (let i = 0; i < c; ++i) r[i] = Array(d);
  for (let i = 0; i < c; ++i) r[i][0] = i;
  for (let j = 0; j < d; ++j) r[0][j] = j;
  for (let i = 1; i < c; ++i) {
    for (let j = 1; j < d; ++j) {
      const s = a[i - 1] === b[j - 1] ? 0 : 1;
      r[i][j] = Math.min(r[i - 1][j] + 1, r[i][j - 1] + 1, r[i - 1][j - 1] + s);
    }
  }
  return r[a.length][b.length];
};

function approximateMatch(
  object: {
    [key: string]: string;
  },
  field: string,
) {
  let closestMatch = null;
  let minDistance = Number.MAX_VALUE;

  for (const key in object) {
    const distance = levenshteinDistance(normalize(key), normalize(field));
    if (distance < minDistance) {
      minDistance = distance;
      closestMatch = key;
    }
  }

  return closestMatch;
}

function normalize(s: string) {
  return s.toLowerCase().replace(" ", "").replace("-", "").replace("_", "");
}
