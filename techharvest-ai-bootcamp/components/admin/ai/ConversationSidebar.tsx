"use client";

import { Plus, MessageSquare } from "lucide-react";

interface Session {
  id: string;
  title: string;
}

interface Props {
  sessions: Session[];
  activeSession?: string;
  onSelect: (id: string) => void;
  onNewChat: () => void;
}

export default function ConversationSidebar({
  sessions,
  activeSession,
  onSelect,
  onNewChat,
}: Props) {
  return (
    <aside className="w-80 border-r bg-white flex flex-col">

      <div className="p-4 border-b">
        <button
          onClick={onNewChat}
          className="w-full rounded-lg bg-green-600 text-white py-3 font-medium hover:bg-green-700 transition flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">

        {sessions.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            No conversations yet.
          </div>
        ) : (
          sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => onSelect(session.id)}
              className={`w-full text-left px-4 py-3 border-b hover:bg-slate-50 transition flex items-center gap-3 ${
                activeSession === session.id
                  ? "bg-green-50 border-l-4 border-green-600"
                  : ""
              }`}
            >
              <MessageSquare size={18} />

              <span className="truncate">
                {session.title}
              </span>
            </button>
          ))
        )}

      </div>

    </aside>
  );
}