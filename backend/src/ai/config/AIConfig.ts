import env from "../../config/env";

export const AIConfig = {

  openAI: {

    apiKey: env.OPENAI_API_KEY,

    model: env.OPENAI_MODEL,

    embeddingModel:
      env.OPENAI_EMBEDDING_MODEL,

  },

  tenant: {

    defaultTenant: "techharvest",

  },

};