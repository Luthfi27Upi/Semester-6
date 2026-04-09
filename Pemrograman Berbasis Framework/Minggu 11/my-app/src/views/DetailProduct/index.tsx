import { ProductType } from "@/types/Product.type";
import styles from "./detailProduct.module.scss";
import Link from "next/link"; 

const DetailProduk = ({ products }: { products: ProductType }) => {

  // Pelindung Utama
  if (!products) {
    return <div style={{ textAlign: "center", padding: "50px" }}>Produk tidak ditemukan atau sedang dimuat...</div>;
  }

  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          {/* Tanda tanya (?) membuat kode ini kebal dari error null/undefined */}
          <img src={products?.image} alt={products?.name} />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{products?.name}</h1>
          <p className={styles.produkdetail__category}>{products?.category}</p>
          <p className={styles.produkdetail__price}>
            {/* Cek apakah price ada, baru format ke Rupiah */}
            Rp {products?.price ? products.price.toLocaleString("id-ID") : "0"}
          </p>
          
          <Link href="/produk" className={styles.produkdetail__button}>
            Kembali ke Daftar Produk
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;