"use client";
import { useParams } from "next/navigation"

export default function Produto() {

    const {id} = useParams();

  return (
    <div>
        <h2>Produto</h2>
        <p>Produto {id}</p>
    </div>
  )
}
