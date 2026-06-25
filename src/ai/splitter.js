import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 800,
  chunkOverlap: 150,
});

export async function splitDocuments(documents) {
  return await splitter.createDocuments(
    documents.map((d) => d.pageContent),
    documents.map((d) => d.metadata)
  );
}