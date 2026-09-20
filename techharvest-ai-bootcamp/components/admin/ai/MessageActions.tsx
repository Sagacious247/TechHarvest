"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface Props {
  content: string;
}

export default function MessageActions({
  content,
}: Props) {

  const [copied, setCopied] = useState(false);

  async function handleCopy() {

    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  }

  return (

    <div className="mt-3 flex items-center gap-3">

      <button
        onClick={handleCopy}
        className="flex items-center gap-2 rounded-lg border px-3 py-1 text-sm transition hover:bg-slate-100"
      >

        {copied ? (

          <>
            <Check size={16} />
            Copied
          </>

        ) : (

          <>
            <Copy size={16} />
            Copy
          </>

        )}

      </button>

    </div>

  );

}