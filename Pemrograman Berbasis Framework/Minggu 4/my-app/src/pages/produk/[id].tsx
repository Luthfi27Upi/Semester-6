import { useRouter } from "next/router";
import DetailView from "../views/produk/detail";

const ProdukDetailPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return <DetailView id={id} />;
};

export default ProdukDetailPage;