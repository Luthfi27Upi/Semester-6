interface Props {
  id: string | string[] | undefined;
}

const DetailView = ({ id }: Props) => {
  return (
    <div>
      <h1>Detail Produk</h1>
      <p>ID Produk: {id}</p>
    </div>
  );
};

export default DetailView;