

export default function Produtos() {


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

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <h2></h2>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}
