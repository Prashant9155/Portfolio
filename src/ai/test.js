import { loadKnowledge } from "./loader.js";
import { splitDocuments } from "./splitter.js";

async function test() {
  const docs = loadKnowledge();

  console.log("Documents:", docs.length);

  const chunks = await splitDocuments(docs);

  console.log("Chunks:", chunks.length);

  console.log(chunks[0]);
}

test();