import { ProductType } from "@/types/Product.type";
import styles from "./detailProduct.module.scss";
import Link from "next/dist/client/link";

const DetailProduk = ({ products }: { products: ProductType }) => {

  if (!products) {
    return <div style={{ textAlign: "center", padding: "50px" }}>Produk tidak ditemukan atau sedang dimuat...</div>;
  }

  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail_image}>
          {/* Karena sudah dilindungi di atas, ini aman dari error */}
          <img src={products.image} alt={products.name} />
        </div>
        <div className={styles.produkdetail_info}>
          <h1 className={styles.produkdetail_name}>{products.name}</h1>
          <p className={styles.produkdetail_category}>{products.category}</p>
          <p className={styles.produkdetail_price}>
            Rp {products.price && products.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
          <Link href="/produk">
            <button className={styles.produkdetail__button}>
              {" "}
              Kembali ke Daftar Produk
            </button>
          </Link>
    </>
  );
};

export default DetailProduk;