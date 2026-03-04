import Link from "next/link";
import styles from "./register.module.css";

const RegisterView = () => {
  const handleRegister = () => {
    // sementara hanya console
    console.log("Register clicked");
  };

  return (
    <div className={styles.register}>
      <h1 className="text-3xl font-bold text-blue-600">Halaman Register</h1>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Nama"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <button
          type="button"
          onClick={handleRegister}
          className={styles.button}
        >
          Register
        </button>
      </form>

      <br />

      <Link href="/auth/login">
        Sudah punya akun? Login
      </Link>
    </div>
  );
};

export default RegisterView;