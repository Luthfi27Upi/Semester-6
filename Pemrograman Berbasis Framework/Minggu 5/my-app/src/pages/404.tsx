import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>

      <div className={styles.error}>
        <img
          src="/page-not-found.png"
          alt="Page Not Found"
          className={styles.error__image}
        />

        <h1 className={styles.error__title}>
          404 - Halaman Tidak Ditemukan
        </h1>

        <p className={styles.error__description}>
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        <Link href="/" className={styles.error__button}>
          Kembali ke Home
        </Link>

      </div>
    </>
  );
};

export default Custom404;