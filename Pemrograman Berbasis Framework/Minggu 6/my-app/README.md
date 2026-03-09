# Jobsheet 7 - API Routes

Luthfi Triaswangga

NIM : 2341720208

Kelas : TI 3D 

## Langkah 1 - Menjalankan Project

```
npm run dev
```

## Langkah 2 - Membuat API Produk

![Hasil](../assets/1.png)

## Langkah 3 - Fetch Data API Di FrontEnd

![Hasil](../assets/2.png)

## Langkah 5 - Setup Firebase

![Hasil](../assets/3.png)

## Langkah 6 - Instal Firebase

```
npm install firebase

added 79 packages, and audited 421 packages in 2m

140 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Langkah 7 - Konfigurasi Environment Variable

Membuat file .env.local

```
FIREBASE_API_KEY=AIzaSyAgUrlyDG12NIDtsXioASCpusc9eGL5Q5g, 
FIREBASE_AUTH_DOMAIN=framework-next-7b567.firebaseapp.com,
FIREBASE_PROJECT_ID=framework-next-7b567, 
FIREBASE_STORAGE_BUCKET=framework-next-7b567.firebasestorage.app,
FIREBASE_MESSAGING_SENDER_ID=804690804466, 
FIREBASE_APP_ID=1:804690804466:web:24245cfadb7b503c06da6b
```

## Langkah 8 - Konfigurasi Firebase

```
export default app;
```

## Langkah 9 - Ambil Data dari Firestore

```
import { getFirestore, collection, getDocs, doc} from 'firebase/firestore';
import app from './firebase';

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}
```

## Langkah 10 - API Mengambil Data Firebase

![Hasil](../assets/4.png)

![Hasil](../assets/5.png)

## Tugas 1 - Menambah Database

![Hasil](../assets/6.png)

![Hasil](../assets/7.png)

## Tugas 2 - Menambah Field Kategori

![Hasil](../assets/8.png)

![Hasil](../assets/9.png)

## Tugas 3 - Menambah Tombol Refresh Data
![Hasil](../assets/10.png)


# Pertanyaan Evaluasi

1. Apa fungsi API Routes pada Next.js?

Fungsi API Routes pada Next.js adalah untuk membuat endpoint backend langsung di dalam project Next.js tanpa memerlukan framework backend terpisah seperti Express atau Laravel. Dengan API Routes, developer dapat membuat fungsi server yang menangani request HTTP seperti GET atau POST, kemudian mengirimkan response dalam bentuk JSON kepada frontend. Hal ini memungkinkan aplikasi Next.js mengambil, mengolah, dan mengirim data dari database atau layanan lain melalui endpoint seperti /api/produk, sehingga komunikasi antara frontend dan backend dapat dilakukan dalam satu project yang sama.

2. Mengapa .env.local tidak boleh di-push ke repository?

File .env.local tidak boleh di-push ke repository karena file tersebut biasanya berisi informasi sensitif seperti API key, konfigurasi database, atau credential layanan pihak ketiga seperti Firebase. Jika file ini diunggah ke repository publik, maka orang lain dapat melihat dan menyalahgunakan data tersebut, misalnya untuk mengakses database atau menggunakan layanan yang terhubung dengan project. Oleh karena itu .env.local digunakan untuk menyimpan environment variable secara lokal dan biasanya dimasukkan ke dalam .gitignore agar tidak ikut terunggah ke repository.

3. Apa perbedaan data statis dan data dinamis?

Perbedaan data statis dan data dinamis terletak pada cara data tersebut dibuat dan diperbarui. Data statis adalah data yang sudah ditentukan langsung di dalam kode program dan tidak berubah kecuali developer mengubah kodenya secara manual. Sebaliknya, data dinamis berasal dari sumber luar seperti database atau API sehingga dapat berubah sewaktu-waktu tanpa perlu mengubah kode program. Dalam praktikum ini, contoh data statis adalah array produk yang ditulis langsung di file API, sedangkan data dinamis adalah data produk yang diambil dari database Firebase Firestore.

4. Mengapa Next.js disebut framework fullstack?

Next.js disebut framework fullstack karena mampu menangani pengembangan frontend dan backend dalam satu framework. Pada sisi frontend, Next.js menggunakan React untuk membangun tampilan antarmuka pengguna, sedangkan pada sisi backend Next.js menyediakan fitur seperti API Routes untuk membuat endpoint server, mengakses database, dan memproses data. Dengan kemampuan ini, developer dapat membangun aplikasi web lengkap mulai dari tampilan hingga logika server dalam satu project tanpa harus menggunakan teknologi backend terpisah.