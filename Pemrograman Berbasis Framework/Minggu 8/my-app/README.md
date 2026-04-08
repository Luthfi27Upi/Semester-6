# Jobsheet 9 - Server Side Rendering

Luthfi Triaswangga

NIM : 2341720208

Kelas : TI 3D 

## Langkah 1 - Setup Halaman SSR

![Hasil](../assets/1.png)

## Langkah 2 – Implementasi getServerSideProps pada server.tsx

![Hasil](../assets/2.png)

## Langkah 3 – Refactor Type ( produk type )

## Langkah 4 – Uji Perbedaan SSR vs CSR

![Hasil](../assets/3.png)

![Hasil](../assets/4.png)

## Tugas Praktikum

1. Buat 2 halaman:
o /products (CSR)
o /products/server (SSR)

2. Dokumentasikan:
o Screenshot CSR
o Screenshot SSR
o Perbedaan Network tab
o Perbedaan View Source

## Studi Analisis
1. Mengapa SSR lebih baik untuk SEO?

SSR lebih baik untuk SEO karena server mengirimkan dokumen HTML yang sudah berisi konten penuh secara langsung ke browser. Hal ini memungkinkan bot mesin pencari (seperti Googlebot) untuk langsung merayapi dan membaca seluruh teks, tautan, serta gambar tanpa harus menunggu eksekusi JavaScript. Berbeda dengan CSR yang awalnya hanya menampilkan HTML kosong, konten utuh pada SSR membuat proses indeksasi halaman web menjadi jauh lebih cepat dan optimal.

2. Kapan sebaiknya menggunakan SSR?

SSR sangat disarankan untuk digunakan pada halaman publik yang mengandalkan visibilitas SEO agar mudah ditemukan oleh pengguna di mesin pencari. Metode ini juga sangat cocok diterapkan pada halaman yang menampilkan data dinamis dan harus selalu diperbarui setiap kali ada permintaan akses. Contoh penerapan terbaiknya adalah pada halaman detail produk e-commerce, artikel portal berita, maupun landing page untuk kampanye promosi.

3. Apa kekurangan SSR dibanding CSR?

SSR sangat disarankan untuk digunakan pada halaman publik yang mengandalkan visibilitas SEO agar mudah ditemukan oleh pengguna di mesin pencari. Metode ini juga sangat cocok diterapkan pada halaman yang menampilkan data dinamis dan harus selalu diperbarui setiap kali ada permintaan akses. Contoh penerapan terbaiknya adalah pada halaman detail produk e-commerce, artikel portal berita, maupun landing page untuk kampanye promosi.

4. Mengapa skeleton tidak muncul pada SSR?

Pada SSR, seluruh proses pengambilan data dari API diselesaikan di balik layar oleh server sebelum halaman tersebut dikirim ke browser. Saat dokumen HTML akhirnya dikirimkan dan tiba di browser, dokumen tersebut sudah dalam keadaan matang dan terisi lengkap dengan semua data produk. Karena browser menerima hasil yang sudah 100% jadi dan tidak perlu lagi mengambil data secara mandiri, maka indikator visual seperti loading atau skeleton sama sekali tidak perlu ditampilkan.