import React from "react";

interface Props {
  title: string;
  href: string;
}

export default function EmailButton({
  title,
  href,
}: Props) {
  return (
    <div
      style={{
        marginTop: 35,
        textAlign: "center",
      }}
    >
      <a
        href={href}
        style={{
          background: "#16a34a",
          color: "#fff",
          textDecoration: "none",
          padding: "16px 36px",
          borderRadius: "10px",
          fontWeight: 700,
          display: "inline-block",
        }}
      >
        {title}
      </a>
    </div>
  );
}