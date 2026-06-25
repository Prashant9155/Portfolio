import { pipeline } from "@xenova/transformers";

let extractor = null;

async function getExtractor() {
  if (!extractor) {
    extractor = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );
  }

  return extractor;
}

export const embeddings = {
  async embedQuery(text) {
    const model = await getExtractor();

    const output = await model(text, {
      pooling: "mean",
      normalize: true,
    });

    return Array.from(output.data);
  },

  async embedDocuments(texts) {
    const model = await getExtractor();

    const vectors = [];

    for (const text of texts) {
      const output = await model(text, {
        pooling: "mean",
        normalize: true,
      });

      vectors.push(Array.from(output.data));
    }

    return vectors;
  },
};