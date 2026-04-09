# Jobsheet 12 - Incremental Static Regeneration (ISR)

Luthfi Triaswangga

NIM : 2341720208

Kelas : TI 3D 

## Langkah 1 - Setup Halaman Static

```
import TampilanProduk from "@/views/product";
import { ProductType } from "@/types/Product.type";

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

## Langkah 2 – Pengujian ISR

Route (pages)
┌ ○ /
├   /_app
├ ○ /404
├ ○ /about
├ ƒ /api/[[...produk]]
├ ƒ /api/hello
├ ○ /auth/login
├ ○ /auth/register
├ ○ /blog
├ ○ /blog/[slug]
├ ○ /category/[...slug]
├ ○ /produk
├ ƒ /produk/[produk]
├ ƒ /produk/server
├ ● /produk/static (1689 ms)
├ ○ /profile
├ ○ /profile/edit
├ ○ /setting/app
├ ○ /shop/[[...slug]]
├ ○ /user
└ ○ /user/password

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses getStaticProps)
ƒ  (Dynamic)  server-rendered on demand

## Langkah 1 – Buat API Revalidate

![Hasil](../assets/1.png)

## Langkah 2 - Tambahkan Parameter Data

![Hasil](../assets/2.png)

## Langkah 3 – Tambahkan Token Security

```
REVALIDATE_TOKEN=12345678
```

## Pengujian Manual Revalidation

```
http://localhost:3000/api/revalidate?data=produk&token=12345678
```

![Hasil](../assets/3.png)

```
http://localhost:3000/api/revalidate?data=produk&token=123456
```

![Hasil](../assets/4.png)

## Tugas Praktikum 

Sudah saya terapkan pada Langkah langkah praktikum

## Pertanyaan Analisis

1. Mengapa ISR lebih fleksibel dibanding SSG?

ISR (Incremental Static Regeneration) jauh lebih fleksibel karena memungkinkan kita untuk memperbarui halaman statis secara spesifik di latar belakang tanpa harus melakukan build ulang seluruh aplikasi (npm run build). Pada SSG murni, sekecil apa pun perubahan data di database, developer harus mematikan server dan mem-build ulang semuanya. Dengan ISR, halaman tetap disajikan secepat SSG, tetapi kontennya bisa diperbarui secara dinamis tanpa mengganggu uptime aplikasi.

2. Apa perbedaan revalidate waktu dan on-demand?

- Revalidate Waktu (Background Revalidation): Pembaruan data terjadi secara otomatis dan pasif berdasarkan interval waktu yang ditentukan (misalnya revalidate: 10). Jika ada user yang mengunjungi halaman setelah 10 detik berlalu, server akan secara otomatis mengambil data terbaru di latar belakang untuk user berikutnya.

- On-Demand Revalidation: Pembaruan data terjadi secara instan (detik itu juga) secara manual. Pembaruan ini tidak dikendalikan oleh waktu, melainkan dipicu (triggered) secara sengaja dengan menembak atau mengakses sebuah API endpoint khusus (seperti memanggil URL /api/revalidate).

3. Mengapa endpoint revalidation harus diamankan?

Setiap kali endpoint revalidation dipanggil, server Next.js dipaksa untuk bekerja keras: melakukan fetch data ke database, menyusun ulang kerangka UI, dan mencetak ulang file HTML statis. Jika endpoint ini dibiarkan terbuka untuk publik tanpa pengamanan, siapa saja di internet bisa mengakses URL tersebut sesuka hati dan menyuruh server bekerja tanpa henti.

4. Apa risiko jika token tidak digunakan?

Risiko terbesarnya adalah kerentanan terhadap serangan DDoS (Distributed Denial of Service) dan pembengkakan biaya operasional. Pihak yang tidak bertanggung jawab (atau bot script) bisa melakukan spamming URL /api/revalidate ribuan kali dalam satu menit.

5. Kapan ISR lebih cocok dibanding SSR?

ISR sangat cocok digunakan untuk halaman yang datanya tidak berubah setiap detik, tetapi masih perlu diperbarui secara berkala, dan menuntut performa loading super cepat serta SEO (Search Engine Optimization) yang maksimal.