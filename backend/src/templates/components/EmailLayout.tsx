import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function EmailLayout({
  title,
  children,
}: Props) {
  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "40px 20px",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* Header */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#16a34a,#15803d)",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#fff",
              margin: 0,
              fontSize: "34px",
            }}
          >
            TechHarvest
          </h1>

          <p
            style={{
              color: "#dcfce7",
              marginTop: "10px",
            }}
          >
            Learn AI. Build Income. Transform
            Your Future.
          </p>
        </div>

        {/* Title */}

        <div
          style={{
            padding: "40px 40px 10px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "30px",
              color: "#0f172a",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Content */}

        <div
          style={{
            padding: "20px 40px 50px",
            color: "#475569",
            lineHeight: 1.8,
            fontSize: "16px",
          }}
        >
          {children}
        </div>

        {/* Footer */}

        <div
          style={{
            background: "#0f172a",
            color: "#94a3b8",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Julius Paul
          </p>

          <p style={{ marginTop: 8 }}>
            Founder, TechHarvest Creative Lab
          </p>

          <p
            style={{
              marginTop: 20,
              fontSize: 13,
            }}
          >
            © {new Date().getFullYear()}
            {" "}
            TechHarvest Creative Lab.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}