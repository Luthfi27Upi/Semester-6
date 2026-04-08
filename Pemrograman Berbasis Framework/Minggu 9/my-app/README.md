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

## Tugas Praktikum 

Saya sudah menerapkan di praktikum

## Studi Analisis

1. Mengapa SSG tidak menampilkan data terbaru?

Pada metode SSG, proses pengambilan data (fetching) dari API atau database hanya dilakukan satu kali saja, yaitu pada saat aplikasi di-build (npm run build). Setelah proses build selesai, halaman tersebut diubah menjadi file HTML statis yang tidak lagi berkomunikasi dengan database setiap kali diakses pengguna. Oleh karena itu, perubahan apa pun yang terjadi pada server atau database tidak akan tercermin di halaman web sampai developer mematikan server dan melakukan proses build ulang.

2. Mengapa SSG lebih cepat?

SSG memiliki performa yang sangat cepat karena browser pengguna langsung menerima dokumen HTML yang sudah matang tanpa perlu menunggu server melakukan komputasi atau mengambil data. Halaman statis ini juga memiliki ukuran yang ringan dan dapat dengan mudah disimpan serta didistribusikan melalui jaringan CDN (Content Delivery Network). Akibatnya, waktu respons server menjadi sangat singkat dan halaman web dapat dimuat secara instan di layar pengguna.

3. Kapan SSG tidak cocok digunakan?

Metode SSG sangat tidak disarankan untuk aplikasi yang membutuhkan pembaruan data secara real-time atau memiliki frekuensi perubahan data yang sangat tinggi (seperti aplikasi chat atau grafik saham). SSG juga tidak cocok untuk halaman yang kontennya sangat personal dan berbeda-beda untuk setiap pengguna yang login (misalnya halaman profil atau dasbor pengaturan akun). Jika dipaksakan pada skenario tersebut, waktu untuk melakukan build aplikasi akan menjadi sangat lama dan data yang disajikan akan sering kali usang.

4. Mengapa e-commerce tidak cocok menggunakan SSG murni?

Platform e-commerce tidak cocok menggunakan SSG murni karena elemen-elemen krusial seperti ketersediaan stok barang dan fluktuasi harga harus selalu akurat setiap detiknya. Jika menggunakan SSG murni, pengguna berisiko melihat produk masih berstatus "Tersedia" padahal stok di database sudah habis, yang dapat memicu masalah transaksi. Oleh karena itu, e-commerce modern biasanya menggunakan pendekatan campuran, seperti memakai SSG untuk halaman profil toko, namun menggunakan SSR atau CSR untuk detail keranjang belanja dan ketersediaan stok.

5. Apa perbedaan build mode dan development mode?

Development mode (npm run dev) dirancang khusus untuk mempermudah developer saat menulis kode, sehingga Next.js sengaja mengabaikan aturan statis dan merender ulang halaman (serta memanggil API) setiap kali layar di-refresh agar perubahan kode langsung terlihat. Sebaliknya, Build/Production mode (npm run build dilanjut npm run start) adalah lingkungan asli aplikasi saat diunggah ke internet yang sangat difokuskan pada optimasi performa. Pada mode produksi inilah arsitektur SSG benar-benar menunjukkan perilaku aslinya, karena halaman web dikunci menjadi HTML statis dan tidak lagi melakukan pemanggilan data ke API.