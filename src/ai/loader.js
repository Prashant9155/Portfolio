import { knowledgeDocuments } from "../knowledge/index.js";

export function loadKnowledge() {
  const docs = knowledgeDocuments.map((doc, index) => {
    const pageContent = JSON.stringify(doc.content, null, 2);

    console.log({
      index,
      id: doc.id,
      title: doc.title,
      hasContent: !!doc.content,
      type: typeof pageContent,
    });

    return {
      pageContent,
      metadata: {
        id: doc.id,
        title: doc.title,
        category: doc.category,
      },
    };
  });

  return docs;
}