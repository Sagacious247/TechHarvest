"use client";

import MessageBubble from "./MessageBubble";

interface Props {
  messages: any[];
}

export default function ChatHistory({
  messages,
}: Props) {
  if (!messages.length) {
    return (
      <div className="mt-32 text-center text-slate-400">
        Start a conversation with TechHarvest AI...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {messages.map((message: any) => (
        <MessageBubble
          key={message.id}
          role={message.role}
          content={message.content}
          citations={message.citations}
      />
      ))}
    </div>
  );
}