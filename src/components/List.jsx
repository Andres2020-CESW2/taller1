import React, { useEffect, useState } from "react";

const List = (props) => {

    const [list, setList] = useState(props.list)


    useEffect(() => {
        setList(props.list)
    }, [props]);

    useEffect(() => {
        setList(list)
    }, [list]);

    const handleRemoveSpecificRow = (idx) => () => {
        const rows = [...list.rows]
        rows.splice(idx, 1)
        setList({ rows })
    }

    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number)
    }

    return (
        <>
            <h1>Lista secccion</h1>
            <h6>
                Registros: {list.rows.length}
            </h6>
            <table
                className="table table-bordered table-hover"
                id="tab_logic"
            >
                <thead>
                    <tr>
                        <th className="text-center" colSpan="2"> Action </th>
                        <th className="text-center"> Nombre movimiento </th>
                        <th className="text-center"> Cantidad </th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {list.rows?.map((item, idx) => (
                        <tr id="addr0" key={idx}>
                            <td>
                                <button className="btn btn-outline-danger btn-sm">Editar</button>
                            </td>
                            <td>
                                <button className="btn btn-outline-danger btn-sm" onClick={handleRemoveSpecificRow(idx)}>Eliminar</button>
                            </td>
                            <td>
                                <p>{list.rows[idx].nombre}</p>
                            </td>
                            <td>
                                {
                                    (list.rows[idx].tipo == 'Gasto') ?
                                        <p style={{ color: 'red' }}>{formatNumber(list.rows[idx].cantidad)}</p>
                                        :
                                        <p style={{ color: 'green' }}>{formatNumber(list.rows[idx].cantidad)}</p>
                                }

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default List;