import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { useRouter } from "next/router";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];  

type AppshellProps = {
  children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default Appshell;