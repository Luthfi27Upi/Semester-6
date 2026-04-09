import { useRouter } from "next/router";
import fetcher from "@/utlis/swr/fetcher";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({product}: {product: ProductType}) => {
    {/digunakan client side rendering/}
    // const Router = useRouter();
    // console.log(Router);
    // const { query } = useRouter();
    // const {data, error, isLoading} = useSWR(`/api/produk/${query.produk}`, fetcher);

    return (
        <div>
            <DetailProduk products={product} />
        </div>
    );
};

export default HalamanProduk;

{/digunakan server side rendering/}
export async function getServerSideProps({params}: {params: {produk: string} }) {
    const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`); 
    const response = await res.json(); 
    return {
        props: {
            // TAMBAHKAN || null DI SINI
            product: response.data || null, 
        },
    };
}