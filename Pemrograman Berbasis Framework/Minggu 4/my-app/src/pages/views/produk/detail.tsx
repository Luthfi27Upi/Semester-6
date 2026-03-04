import styles from "./produk.module.css";

interface Props {
  id: string | string[] | undefined;
}

const DetailView = ({ id }: Props) => {
  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.detailTitle}>
        Detail Produk
      </h1>
      <p>ID Produk: {id}</p>
    </div>
  );
};

export default DetailView;