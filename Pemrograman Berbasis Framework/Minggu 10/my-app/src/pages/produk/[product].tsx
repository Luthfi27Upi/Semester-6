import { useRouter } from "next/router";
import produk from "../api/produk";

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router);
    const router = useRouter();
    console.log(router);
    const { product } = router.query;

    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk: {product} </p>
        </div>
    );
};

export default HalamanProduk;