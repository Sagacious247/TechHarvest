import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function createSession(
  tenantId: string,
  userId: string
) {
  const { data } = await axios.post(
    `${API}/ai/conversation/session`,
    {
      tenantId,
      userId,
    }
  );

  return data.data;
}

export async function getSessions(
  tenantId: string,
  userId: string
) {
  const { data } = await axios.get(
    `${API}/ai/conversation/sessions`,
    {
      params: {
        tenantId,
        userId,
      },
    }
  );

  return data.data;
}

export async function getConversation(
  sessionId: string
) {
  const { data } = await axios.get(
    `${API}/ai/conversation/session/${sessionId}`
  );

  return data.data;
}

export async function sendMessage(
  tenantId: string,
  userId: string,
  sessionId: string,
  question: string
) {
  const { data } = await axios.post(
    `${API}/ai/chat`,
    {
      tenantId,
      userId,
      sessionId,
      question,
    }
  );

  return data.data;
}