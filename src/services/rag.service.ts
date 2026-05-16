import { generateEmbedding } from "./embedding.service";
import { vectorSearch } from "./vectorSearch.service";
import { geminiModel } from "../config/gemini";
import { SYSTEM_PROMPT } from "../prompts/systemPrompt";

export const askRAG = async (question: string): Promise<string> => {
  const embedding = await generateEmbedding(question);
  const docs = await vectorSearch(embedding);

  if (!docs || docs.length === 0) {
    return "I don't know based on the available documents.";
  }

  const context = docs
    .map((doc: any) => doc.content)
    .join("\n\n");

  const result = await geminiModel.generateContent(
    `${SYSTEM_PROMPT}\n\nContext:\n${context}\n\nQuestion:\n${question}`
  );

  return result.response.text();
};
