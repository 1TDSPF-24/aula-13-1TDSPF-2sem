"use client";

export interface ITipoParametro {
  id: number
}

export default function Produto({ params }: { params: ITipoParametro }) {

  return (
    <div>
      <h2>Produto</h2>
      <p>Produto {params.id}</p>
    </div>
  )
}
