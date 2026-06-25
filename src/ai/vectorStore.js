import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { embeddings } from "./embeddings.js";
import { loadKnowledge } from "./loader.js";
import { splitDocuments } from "./splitter.js";

let vectorStore = null;

export async function buildVectorStore() {
  if (vectorStore) {
    return vectorStore;
  }

  console.log("📚 Loading knowledge...");

  const documents = loadKnowledge();

  console.log(`Loaded ${documents.length} knowledge documents`);

  const chunks = await splitDocuments(documents);

  console.log(`Created ${chunks.length} chunks`);

  vectorStore = await MemoryVectorStore.fromDocuments(
    chunks,
    embeddings
  );

  console.log("✅ Vector store ready");

  return vectorStore;
}

export async function getVectorStore() {
  if (!vectorStore) {
    return await buildVectorStore();
  }

  return vectorStore;
}