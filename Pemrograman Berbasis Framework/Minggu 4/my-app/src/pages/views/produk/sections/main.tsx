import Link from "next/link";

const Main = () => {
  const products = [
    { id: 1, name: "Produk 1" },
    { id: 2, name: "Produk 2" },
    { id: 3, name: "Produk 3" },
  ];

  return (
    <section>
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/produk/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;