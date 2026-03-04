# Jobsheet 5 - Styling

Luthfi Triaswangga

NIM : 2341720208

Kelas : TI 3D 

# 1. Global CSS
a. File Global

`src/styles/global.css`

```
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.navbar {
  width: 100%;
  height: 60px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.footer {
  width: 100%;
  height: 60px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

b. Import Global CSS

`src/styles/_app.tsx`

```
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/AppShell'
import Navbar from '@/components/layouts/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  )
}
```

# 2. CSS Module (Local Scope)

a. Struktur Komponen Navbar

`src/components/layout/navbar/`

```
Membuat navbar.module.css
```

b. File CSS Module

Modifikasi navbar.module.css

```
.navbar {
    width: 100%;
    height: 100px;
    background-color: #333;
    display: flex;
    color: white;
    align-items: center;
    padding: 0 20px;
}
```

c. Pemanggilan di Komponen

Modifikasi kode pada index.tsx pada folder navbar

```
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h1>Navbar Component</h1>
    </div>
  )
}

export default Navbar
```
![Hasil](../assets/1.png)

# 3. Styling untuk Pages (CSS Modules)

a. Contoh login page

`src/pages/auth/`

Modifikasi login.module.css

```
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
```

Modifikasi login.tsx

```
import styles from "./login.module.css";
<div className={styles.login}>
```

![Hasil](../assets/2.png)

# 4. Conditional Rendering Navbar (Tanpa Navbar di Login)

 Modifikasi index.tsx pada folder appshell

 ```
import { useRouter } from "next/router";
const disableNavbar = ["/auth/login", "/auth/register"];
const {pathname} = useRouter();
{!disableNavbar.includes(router.pathname) && <Navbar />}
```

![Hasil](../assets/3.png)

# 5. Refactoring Struktur Project (Best Practice)

`pages/auth/login/index.tsx`

```
import TampilanLogin from "../views/auth/login";

const halamanLogin = () => {
  return <TampilanLogin />;
}

export default halamanLogin;
```

pages/views/auth/login/indes.tsx

```
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const TampilanLogin = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/produk"); // imperatif navigation
  };

  return (
    <div className={styles.login}>
      <h1>Halaman Login</h1>

      <button onClick={handleLogin}>Login</button>

      <br />

      <Link href="/auth/register">
        Belum punya akun? Daftar di sini
      </Link>
    </div>
  );
};

export default TampilanLogin;
```

![Hasil](../assets/3.png)

# 6. Inline Stylinh (CSS in JS)

Modifikasi index.tsx pada `views/auth/login`

```
<h1 style={{ color: "red",borderRadius: "10px",padding: "10px",}}>Belum Punya Akun?</h1>
```

![Hasil](../assets/4.png)

# 7. Kombinasi Global CSS + CSS Module

Modifikasi global.css

```
.big {
  font-size: 1.5rem;
}
```

Modifikasi index.tsx pada `components/layout/navbar`

```
<div className="big">Navbar Component</div>
```