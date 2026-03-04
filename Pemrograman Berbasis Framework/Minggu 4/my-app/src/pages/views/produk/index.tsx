import styles from "./produk.module.css";
import Hero from "./sections/hero";
import Main from "./sections/main";

const ProdukView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Hero />
      </div>

      <div className={styles.main}>
        <Main />
      </div>
    </div>
  );
};

export default ProdukView;