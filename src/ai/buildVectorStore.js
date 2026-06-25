import { buildVectorStore } from "./vectorStore.js";

async function main() {
  console.log("🚀 Building vector store...");

  await buildVectorStore();

  console.log("✅ Vector store built successfully.");
}

main().catch(console.error);