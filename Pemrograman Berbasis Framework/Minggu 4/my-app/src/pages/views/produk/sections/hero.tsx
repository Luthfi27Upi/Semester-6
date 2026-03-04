import Link from "next/link";
import styles from "../produk.module.css";

const Main = () => {
  const products = [
    { id: 1, name: "Produk 1" },
    { id: 2, name: "Produk 2" },
    { id: 3, name: "Produk 3" },
  ];

  return (
    <section className={styles.main}>
      <h2>Daftar Produk</h2>

      <ul className={styles.productList}>
        {products.map((item) => (
          <li key={item.id} className={styles.productItem}>
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