import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styles/Register.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';


const Register = () => {


    const list = {
        rows: []
    }

    const [listState, setListState] = useState(list)
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [tipo, setTipo] = useState('')

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleCantidad = (e) => {
        setCantidad(e.target.value)
    }

    const handleTipo = (e) => {
        setTipo(e.target.value)
    }

    const submitRegistro = () => {
        const adds = {
            nombre: nombre,
            cantidad: cantidad,
            tipo: tipo,
        };

        setListState({
            rows: [...listState.rows, adds]
        });
        reset()
    }

    const reset = () => { document.getElementById("form").reset(); }

    return (
        <Row className='container_row'>
            <Col>
                <Form className='container_form' id='form'>
                    <Form.Group className="mb-3">
                        <Form.Label>Tipo de Movimiento:</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleTipo}>
                            <option>Selecciona el tipo</option>
                            <option value="Ingreso">Ingreso</option>
                            <option value="Gasto">Gasto</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" required={true} onChange={handleNombre} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="text" placeholder="Cantidad" onChange={handleCantidad} />
                    </Form.Group>
                    <Button variant="secundary" onClick={reset}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={submitRegistro} >
                        Agregar Movimiento
                    </Button>
                </Form>
            </Col>
            <Col>
                <List list={listState}/>
            </Col>
        </Row>
    );
};

export default Register;