export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "2rem",
      textAlign: "center",
      fontFamily: "var(--font-geist-sans), sans-serif",
      background: "radial-gradient(ellipse at bottom, #0f172a, #020617)",
      color: "#f8fafc"
    }}>
      <div style={{
        maxWidth: "600px",
        padding: "3rem",
        borderRadius: "24px",
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          background: "linear-gradient(to right, #38bdf8, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem"
        }}>
          Personal Finance Dashboard
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#94a3b8",
          lineHeight: 1.6,
          marginBottom: "2rem"
        }}>
          A clean, modern, and high-performance financial tracking workspace. Built with Next.js, Turborepo, and PNPM.
        </p>
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center"
        }}>
          <span style={{
            fontSize: "0.85rem",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            background: "rgba(56, 189, 248, 0.1)",
            border: "1px solid rgba(56, 189, 248, 0.2)",
            color: "#38bdf8"
          }}>
            Turborepo Active
          </span>
          <span style={{
            fontSize: "0.85rem",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            background: "rgba(129, 140, 248, 0.1)",
            border: "1px solid rgba(129, 140, 248, 0.2)",
            color: "#818cf8"
          }}>
            PNPM Monorepo
          </span>
        </div>
      </div>
    </main>
  );
}
