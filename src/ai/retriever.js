import { getVectorStore } from "./vectorStore.js";

const DEFAULT_K = 5;

export async function retrieveRelevantChunks(query, k = DEFAULT_K) {
  const vectorStore = await getVectorStore();

  const results = await vectorStore.similaritySearch(query, k);

  return results;
}

export async function retrieveContext(query, k = DEFAULT_K) {
  const documents = await retrieveRelevantChunks(query, k);

  return documents
    .map((doc, index) => {
      return `
Source ${index + 1}
---------------
Title: ${doc.metadata.title}
Category: ${doc.metadata.category}

${doc.pageContent}
`;
    })
    .join("\n\n");
}