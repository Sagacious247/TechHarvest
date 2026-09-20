"use client";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div className="rounded-2xl border bg-white px-5 py-4 shadow-sm">

        <div className="flex items-center gap-2">

          <span className="text-sm text-slate-500">
            TechHarvest AI is thinking
          </span>

          <div className="flex gap-1">

            <span className="h-2 w-2 animate-bounce rounded-full bg-green-500"></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-green-500"
              style={{ animationDelay: "150ms" }}
            ></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-green-500"
              style={{ animationDelay: "300ms" }}
            ></span>

          </div>

        </div>

      </div>

    </div>
  );
}