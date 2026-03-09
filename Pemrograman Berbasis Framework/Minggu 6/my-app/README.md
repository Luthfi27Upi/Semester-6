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