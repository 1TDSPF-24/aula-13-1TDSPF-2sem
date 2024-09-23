"use client";

import { TipoParametro } from "@/app/types";

export default function Produto({ params }: { params: TipoParametro }) {

  return (
    <div>
      <h2>Produto</h2>
      <p>Produto {params.id}</p>
    </div>
  )
}
