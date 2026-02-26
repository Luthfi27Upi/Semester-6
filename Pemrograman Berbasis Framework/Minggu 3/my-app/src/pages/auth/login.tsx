import Link from "next/link";

const halamanLogin = () => {
    return (
        <div>
            <h1>Halaman Login</h1>
            <Link href="/auth/register">Belum punya akun? Daftar di sini</Link>
        </div>
    );
}

export default halamanLogin;