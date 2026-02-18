import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Praktikum Next.js Pages Router</h1>

      <Link href="/about">
        <button style={{ padding: "10px 15px", cursor: "pointer" }}>
          Tentang Saya
        </button>
      </Link>
    </main>
  );
}
