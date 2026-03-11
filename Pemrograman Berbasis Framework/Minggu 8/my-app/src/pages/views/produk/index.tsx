import styles from "./produk.module.css";
import Hero from "./sections/hero";
import Main from "./sections/hero";

const ProdukView = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Main />
    </div>
  );
};

export default ProdukView;