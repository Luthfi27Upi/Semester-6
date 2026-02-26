1. Apa perbedaan [id].js dan [...slug].js?

[id].js digunakan untuk menangkap satu parameter dinamis saja (misalnya /produk/1).
Sedangkan [...slug].js digunakan untuk menangkap banyak parameter sekaligus dalam satu route (misalnya /category/a/b/c).

2. Mengapa slug berbentuk array?

Karena catch-all route ([...slug]) bisa menerima lebih dari satu segment URL. Setiap bagian path disimpan sebagai elemen array, misalnya /shop/baju/pria menjadi ["baju", "pria"].

3. Kapan sebaiknya menggunakan Link dan router.push()?

<Link> digunakan untuk navigasi biasa antar halaman melalui klik (declarative navigation).
router.push() digunakan untuk navigasi berdasarkan aksi atau logika tertentu, seperti setelah login, submit form, atau redirect otomatis (imperative navigation).

4. Mengapa navigasi Next.js tidak me-refresh halaman?

Karena Next.js menggunakan client-side navigation dengan JavaScript. Hanya konten halaman yang diperbarui tanpa reload seluruh browser, sehingga navigasi lebih cepat dan pengalaman pengguna lebih halus (seperti SPA).