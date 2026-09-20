"use client";

import MarkdownMessage from "./MarkdownMessage";
import MessageActions from "./MessageActions";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  citations?: string;
}

export default function MessageBubble({
  role,
  content,
  citations,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-3xl
          rounded-2xl
          px-5
          py-4
          shadow-sm
          whitespace-pre-wrap
          leading-7
          ${
            isUser
              ? "bg-green-600 text-white"
              : "bg-white border border-slate-200 text-slate-800"
          }
        `}
      >
        {
  isUser ? (

    <p className="whitespace-pre-wrap">
      {content}
    </p>

  ) : (

    <>

  <MarkdownMessage
    content={content}
  />

  {citations && (

    <div className="mt-4 rounded-lg border bg-slate-50 p-4">

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">

        📘 Source

      </p>

      <pre className="whitespace-pre-wrap text-sm text-slate-700">

        {citations}

      </pre>

    </div>

  )}

  <MessageActions
    content={content}
  />

</>

  )
}
      </div>
    </div>
  );
}