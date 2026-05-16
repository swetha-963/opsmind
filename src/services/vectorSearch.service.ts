import Document from "../models/Document";

export const vectorSearch = async (embedding: number[]) => {
  return await Document.aggregate([
    {
      $vectorSearch: {
        index: "vector_index",
        path: "embedding",
        queryVector: embedding,
        numCandidates: 10,
        limit: 3
      }
    }
  ]);
};
