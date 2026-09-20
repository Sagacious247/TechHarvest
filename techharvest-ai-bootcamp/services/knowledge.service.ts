import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export interface CreateKnowledgeDto {
  tenantId: string;
  title: string;
  category: string;
  source: string;
  tags: string[];
  metadata?: Record<string, any>;
}

/*
|--------------------------------------------------------------------------
| GET ALL KNOWLEDGE
|--------------------------------------------------------------------------
*/

export async function getKnowledgeDocuments() {
  const response = await axios.get(
    `${API}/ai/knowledge`
  );

  return response.data;
}

/*
|--------------------------------------------------------------------------
| CREATE KNOWLEDGE
|--------------------------------------------------------------------------
*/

export async function createKnowledge(
  payload: CreateKnowledgeDto
) {
  const response = await axios.post(
    `${API}/ai/knowledge`,
    payload
  );

  return response.data;
}

/*
|--------------------------------------------------------------------------
| UPDATE KNOWLEDGE
|--------------------------------------------------------------------------
*/

export async function updateKnowledge(
  id: string,
  payload: any
) {
  const response = await axios.patch(
    `${API}/ai/knowledge/${id}`,
    payload
  );

  return response.data;
}

/*
|--------------------------------------------------------------------------
| DELETE KNOWLEDGE
|--------------------------------------------------------------------------
*/

export async function deleteKnowledge(
  id: string
) {
  const response = await axios.delete(
    `${API}/ai/knowledge/${id}`
  );

  return response.data;
}