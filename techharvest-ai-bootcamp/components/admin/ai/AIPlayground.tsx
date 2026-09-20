"use client";

import { useState, useEffect, useRef } from "react";

import {
  createSession,
  getSessions,
  getConversation,
  sendMessage,
} from "@/services/chat.service";

import ConversationSidebar from "./ConversationSidebar";
import ChatComposer from "@/components/admin/ai/ChatComposer";
import ChatHistory from "@/components/admin/ai/ChatHistory";
import TypingIndicator from "@/components/admin/ai/TypingIndicator";

export default function AIPlayground() {
    
    const tenantId = "techharvest";
    const userId = "student001";
    
    const [sessions, setSessions] = useState<any[]>([]);
    const [activeSession, setActiveSession] = useState<string>();
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState("");

    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

    async function loadConversation(
  sessionId: string
) {
  const data =
    await getConversation(sessionId);

  setMessages(data);

  setActiveSession(sessionId);
}

async function handleSend(message: string) {
  if (!activeSession) return;

  setLoading(true);

  try {
    const response =
      await sendMessage(

        tenantId,

        userId,

        activeSession,

        message

      );

    // Reload the conversation so the new
    // user message and AI response appear.
    console.log("AI Response:", response);
    await loadConversation(activeSession);

  } catch (error) {
    console.error("Failed to send message:", error);
  } finally {
    setLoading(false);
  }
}


useEffect(() => {
  loadSessions();
}, []);

async function loadSessions() {
  const data = await getSessions(
    tenantId,
    userId
  );

  setSessions(data);

  if (data.length > 0) {
    setActiveSession(data[0].id);
  }
}

  return (

    <div className="h-[calc(100vh-80px)] flex">

      <ConversationSidebar
        sessions={sessions}
        activeSession={activeSession}
        onSelect={loadConversation}
        onNewChat={async () => {

  const session =
    await createSession(
      tenantId,
      userId
    );

  setSessions(prev => [
    session,
    ...prev,
  ]);

  setActiveSession(session.id);

}}
      />

  <div className="flex-1 overflow-y-auto p-8 space-y-6">

  <ChatHistory messages={messages} />
  {loading && <TypingIndicator />}
  <div ref={bottomRef} />

  <div className="flex h-full flex-col">

    ...

    <ChatComposer
        loading={loading}
        onSend={handleSend}
    />

</div>

</div>

    </div>

  );

}