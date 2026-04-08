# Jobsheet 10 - Static Site Generation (SSG)

Luthfi Triaswangga

NIM : 2341720208

Kelas : TI 3D 

## Langkah 1 - Setup Halaman Static

```
import TampilanProduk from "../views/product";
import { ProductType } from "../types/Product.type";

const halamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  // Simulasi pengambilan data produk dari API atau database
  const res = await fetch("http://127.0.0.1:3000/api/produk");
  const response: { data: ProductType[] } = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}

```

## Langkah 3 – Build Production Mode

```
npm run build 

Route (pages)
┌ ○ /
├   /_app
├ ○ /404
├ ○ /about
├ ƒ /api/hello
├ ƒ /api/produk
├ ○ /auth/login
├ ○ /auth/register
├ ○ /blog
├ ○ /blog/[slug]
├ ○ /category/[...slug]
├ ○ /produk (346 ms)
├ ○ /produk/[id]
├ ○ /produk/[id] copy
├ ○ /produk/index copy
├ ƒ /produk/server
├ ● /produk/static (537 ms)
├ ○ /profile
├ ○ /profile/edit
├ ○ /setting/app (311 ms)
├ ○ /shop/[[...slug]]
├ ○ /user
└ ○ /user/password

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses getStaticProps)
ƒ  (Dynamic)  server-rendered on demand
```

![Hasil](../assets/1.png)

## Langkah 4 – Pengujian Perubahan Data

### Uji Coba 1 - Tambah Data di Database

![Hasil](../assets/2.png)

![Hasil](../assets/3.png)

### Uji Coba 2 - Build Ulang

![Hasil](../assets/4.png)

