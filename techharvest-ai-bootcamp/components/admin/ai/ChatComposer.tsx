"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

interface ChatComposerProps {
  loading: boolean;
  onSend: (message: string) => Promise<void>;
}

export default function ChatComposer({
  loading,
  onSend,
}: ChatComposerProps) {
  const [message, setMessage] = useState("");

  async function handleSend() {
    const text = message.trim();

    if (!text || loading) return;

    await onSend(text);

    setMessage("");
  }

  async function handleKeyDown(
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSend();
    }
  }

  return (
    <div className="border-t bg-white p-4">
      <div className="flex items-end gap-3">

        <textarea
          rows={2}
          value={message}
          disabled={loading}
          placeholder="Ask TechHarvest AI anything..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            flex-1
            resize-none
            rounded-xl
            border
            border-slate-300
            p-3
            focus:border-green-600
            focus:outline-none
          "
        />

        <button
          onClick={handleSend}
          disabled={loading || !message.trim()}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-green-600
            text-white
            hover:bg-green-700
            disabled:opacity-50
          "
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </button>

      </div>
    </div>
  );
}