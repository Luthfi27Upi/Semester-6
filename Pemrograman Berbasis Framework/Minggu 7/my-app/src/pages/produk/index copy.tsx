import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

export default function Produk() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    const response = await fetch("/api/produk");
    const data = await response.json();
    setProducts(data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>

      <button onClick={getProducts}>Refresh Data</button>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
}