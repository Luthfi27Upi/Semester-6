import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

type AppshellProps = {
  children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Appshell;