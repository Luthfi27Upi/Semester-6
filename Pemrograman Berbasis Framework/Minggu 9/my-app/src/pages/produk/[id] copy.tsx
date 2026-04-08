import { useRouter } from "next/router";
import DetailView from "@/views/produk/detail";

export default function ProdukDetailPage() {
  const { query } = useRouter();
  return <DetailView id={query.id} />;
}