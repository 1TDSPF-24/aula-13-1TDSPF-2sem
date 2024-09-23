type TipoParametro = {
  id: number;
};

interface ProdutoProps {
  params: TipoParametro;
}

export default function Produto({ params }: ProdutoProps) {
  return (
    <div>
      <h2>Produto</h2>
      <p>Produto {params.id}</p>
    </div>
  );
}
