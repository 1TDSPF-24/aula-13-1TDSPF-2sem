
import Link from "next/link";

export default function Produtos() {

    const listaProdutos = [
        {id: 1, nome: 'Coca-Cola', preco: 5.00},
        {id: 2, nome: 'Fanta', preco: 4.00},
        {id: 3, nome: 'Guarana', preco: 4.50},
        {id: 4, nome: 'Refrigerante', preco: 5.34}
    ];

  return (
    <div>
        <h2>Produtos</h2>

            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td> <Link href={`/produto/${p.id}`}>Editar</Link> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <h2>Quantidade de registros:{listaProdutos.length}</h2>
                        </td>
                    </tr>
                </tfoot>
            </table>

    </div>
  )
}
