type TipoParametro = {
  id:number;
}


export default function Produto({params}:{params:TipoParametro}) {

  return (
    <div>
        <h2>Produto</h2>
        <p>Produto {params.id}</p>
    </div>
  )
}
