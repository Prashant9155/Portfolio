import { knowledgeDocuments } from "../knowledge";

export function loadKnowledge() {
  return knowledgeDocuments.map((doc) => ({
    pageContent: JSON.stringify(doc.content, null, 2),
    metadata: {
      id: doc.id,
      title: doc.title,
      category: doc.category,
    },
  }));
}