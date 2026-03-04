import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const TampilanLogin = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/produk"); // imperatif navigation
  };

  return (
    <div className={styles.login}>
      <h1>Halaman Login</h1>

      <button onClick={handleLogin}>Login</button>

      <br />

      <Link href="/auth/register">
        Belum punya akun? Daftar di sini
      </Link>
    </div>
  );
};

export default TampilanLogin;