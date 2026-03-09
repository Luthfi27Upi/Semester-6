import { useRouter } from "next/router";

export default function Shop() {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;

  return (
    <div>
      <h1>Halaman Shop</h1>

      <p>
        Kategori: {slug ? slug[0] : "Semua Kategori"}
      </p>

    </div>
  );
}