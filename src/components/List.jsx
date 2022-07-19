import React, { useEffect, useState } from "react";

const List = ({ list, setListState }) => {

    const [listShow, setListShow] = useState(list)
    const [listShowFilter, setListShowFilter] = useState([])
    const [filter, setFilter] = useState(false)


    useEffect(() => {
        setListShow(list)
        console.log(listShow)
    }, [listShow, list]);

    const handleRemoveSpecificRow = (idx) => {
        setListState(list.filter((obj) => obj.id !== idx))
    }

    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number)
    }

    const filterRadioButton = () => {

        if (document.getElementById('todos').checked) {
            setFilter(false)
        } else if (document.getElementById('ingreso').checked) {
            setListShowFilter(listShow.filter((obj) => obj.tipo !== 'Gasto'))
            setFilter(true)
        } else {
            setListShowFilter(listShow.filter((obj) => obj.tipo !== 'Ingreso'))
            setFilter(true)
        }

    }

    const filterSearh = (e) => {
        console.log(typeof (e.target.value))
        let terms = e.target.value.split(" ");
        setListShowFilter(listShow.filter((obj) =>
            terms.every(term =>
                Object.values(obj).some(value =>
                    value.includes(term)
                )
            )
        ))
        setFilter(true)
    }

    return (
        <>
            <h1>Lista secccion</h1>
            <div className="row align-items-start">
                <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Buscar" onChange={filterSearh} />
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="todos" defaultChecked onClick={filterRadioButton} />
                        <label className="form-check-label" htmlFor="todos">
                            Todos
                        </label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="ingreso" onClick={filterRadioButton} />
                        <label className="form-check-label" htmlFor="ingreso">
                            Ingreso
                        </label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="gasto" onClick={filterRadioButton} />
                        <label className="form-check-label" htmlFor="gasto">
                            Gastos
                        </label>
                    </div>
                </div>
            </div>
            <h6>
                Registros: {list.length}
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
                    {filter ?
                        listShowFilter?.map((item, idx) => (
                            <tr id="addr0" key={idx}>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Editar</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveSpecificRow(item.id)}>Eliminar</button>
                                </td>
                                <td>
                                    <p>{item.nombre}</p>
                                </td>
                                <td>
                                    {
                                        (item.tipo == 'Gasto') ?
                                            <p style={{ color: 'red' }}>{formatNumber(item.cantidad)}</p>
                                            :
                                            <p style={{ color: 'green' }}>{formatNumber(item.cantidad)}</p>
                                    }

                                </td>
                            </tr>
                        ))
                        :
                        listShow?.map((item, idx) => (
                            <tr id="addr0" key={idx}>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Editar</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveSpecificRow(item.id)}>Eliminar</button>
                                </td>
                                <td>
                                    <p>{item.nombre}</p>
                                </td>
                                <td>
                                    {
                                        (item.tipo == 'Gasto') ?
                                            <p style={{ color: 'red' }}>{formatNumber(item.cantidad)}</p>
                                            :
                                            <p style={{ color: 'green' }}>{formatNumber(item.cantidad)}</p>
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