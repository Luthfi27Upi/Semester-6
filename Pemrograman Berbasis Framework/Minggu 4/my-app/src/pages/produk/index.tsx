import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
  const router = useRouter();

  // simulasi status login
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  return (
    <div>
      <h1>Halaman Produk</h1>
      <p>Produk hanya bisa diakses user yang sudah login</p>
    </div>
  );
};

export default Produk;

