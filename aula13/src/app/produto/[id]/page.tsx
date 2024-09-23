type TipoParametro = {
  id: number;
}
import { useParams } from "next/navigation";

export default function Produto({ params }: { params: TipoParametro }) {



  const { id } = useParams();

  return (
    <div>
      <h2>Produto</h2>
      <p>Produto {id}</p>
    </div>
  )
}
