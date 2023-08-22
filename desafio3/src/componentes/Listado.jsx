import Table from 'react-bootstrap/Table';
const Lista = ({colaboradores}) => {
    return (
        <Table responsive bordered>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((c) =>  (
                    <tr key={c.id}>
                        <td>{c.nombre} </td>
                        <td>{c.correo} </td>
                        <td>{c.edad} </td>
                        <td>{c.cargo} </td>
                        <td>{c.telfono} </td>
                    </tr>
                )) }
            </tbody>
        </Table>
    )

    }
    export default Lista