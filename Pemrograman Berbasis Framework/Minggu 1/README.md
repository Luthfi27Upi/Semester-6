1. Mengapa Pages Router disebut sebagai routing berbasis file?

Pages Router disebut routing berbasis file karena sistem navigasi pada Next.js ditentukan langsung dari struktur file di dalam folder pages. Setiap file yang dibuat di folder tersebut otomatis menjadi sebuah URL tanpa perlu konfigurasi routing tambahan. Misalnya file pages/index.js menjadi route /, dan pages/about.js menjadi route /about. Oleh karena itu proses routing menjadi lebih sederhana dan otomatis.

2. Apa perbedaan Next.js dengan React standar (CRA)?

Perbedaan utama Next.js dengan React standar (Create React App / CRA) adalah pada fitur bawaan dan kemampuan rendering. Next.js merupakan framework React yang sudah menyediakan routing otomatis, server-side rendering (SSR), optimasi performa, dan struktur project yang jelas. Sedangkan React CRA hanya menyediakan library dasar untuk membuat antarmuka pengguna sehingga developer harus menambahkan sendiri routing, konfigurasi, dan fitur lainnya secara manual. Dengan kata lain, Next.js lebih lengkap dan siap digunakan untuk aplikasi skala besar dibandingkan CRA.

3. Apa fungsi perintah npm run dev?

Perintah npm run dev berfungsi untuk menjalankan aplikasi Next.js dalam mode development. Perintah ini akan menjalankan server lokal (biasanya di http://localhost:3000) sehingga developer dapat melihat hasil program secara langsung di browser. Selain itu mode development juga mendukung fitur hot reload, yaitu perubahan kode akan otomatis diperbarui tanpa perlu menjalankan ulang aplikasi.

4. Apa perbedaan npm run dev dan npm run build?

Perbedaan antara npm run dev dan npm run build terletak pada tujuan penggunaannya. npm run dev digunakan saat proses pengembangan aplikasi karena menjalankan server development yang cepat dan mendukung debugging. Sedangkan npm run build digunakan untuk menyiapkan aplikasi ke tahap produksi dengan melakukan optimasi kode, kompresi file, dan pembuatan versi siap deploy sehingga performanya lebih maksimal ketika digunakan oleh pengguna.