import Link from "next/link";

const halamanRegister = () => {
    return (
        <div>
            <h1>Halaman Register</h1>
            <Link href="/auth/login">Sudah punya akun? Masuk di sini</Link>
        </div>
    );
}

export default halamanRegister;