import TampilanProduk from "../views/product";

type ProduckType ={
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const halamanProdukServer = (props: { products: ProduckType[] }) => {
    return (
        <div>
            <h1>Halaman Produk Server</h1>
            <TampilanProduk products={props.products} />
        </div>
    );
};

export default halamanProdukServer;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/produk");
    const response = await res.json();

    return {
        props: {
            products: response.data,
        },
    };
}