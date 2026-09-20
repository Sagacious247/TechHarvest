const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getKnowledgeDocuments() {
  const response = await fetch(
    `${API_URL}/ai/knowledge`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch knowledge.");
  }

  return response.json();
}

export async function deleteKnowledge(
  id: string
) {
  const response = await fetch(
    `${API_URL}/ai/knowledge/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
}