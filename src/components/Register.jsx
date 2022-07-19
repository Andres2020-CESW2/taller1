import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Modal, Button } from "react-bootstrap";
import "./styles/Register.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';
import { v4 as uuid4 } from "uuid";



const Register = ({ listState, setListState, calculation }) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [tipo, setTipo] = useState('')
    const [displayNameInput, setDisplayNameInput] = useState(true)
    const [displayCantidadInput, setDisplayCantidadInput] = useState(true)
    const [textErrorCantidad, setTextErrorCantidad] = useState('')
    const [show, setShow] = useState(false);
    const [textsModal, setTextsModal] = useState({
        titulo: '',
        Descripcion: '',
    })
    const handleClose = () => setShow(false);

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
        if (nombre.length === 0) {
            setDisplayNameInput(false)
        } else if (!/^[0-9]+$/.test(cantidad)) {
            setDisplayCantidadInput(false)
            setTextErrorCantidad("La cantidad debe ser numérico")

        } else if (!parseInt(cantidad) > 0) {
            setDisplayCantidadInput(false)
            setTextErrorCantidad("La cantidad debe ser mayor a cero")
        } else {
            switch (tipo) {
                case 'Gasto':
                    if ((calculation - cantidad) < 0) {
                        setShow(true)
                        setTextsModal({
                            titulo: 'Cuidado!',
                            Descripcion: 'No cuenta con saldo suficiente para realizar este movimiento.!'
                        })
                    } else {
                        setShow(true)
                        setTextsModal({
                            titulo: 'Registro Exitoso!',
                            Descripcion: `${tipo} fue agregado con éxito.`
                        })
                        setDisplayNameInput(true)
                        setDisplayCantidadInput(true)
                        const adds = {
                            id: uuid4(),
                            nombre: nombre,
                            cantidad: cantidad,
                            tipo: tipo,
                        };
                        setListState(
                            [...listState, adds]
                        );
                        reset()
                    }
                    break;
                case 'Ingreso':
                    setShow(true)
                    setTextsModal({
                        titulo: 'Registro Exitoso!',
                        Descripcion: `${tipo} fue agregado con éxito.`
                    })
                    setDisplayNameInput(true)
                    setDisplayCantidadInput(true)
                    const adds = {
                        id: uuid4(),
                        nombre: nombre,
                        cantidad: cantidad,
                        tipo: tipo,
                    };
                    setListState(
                        [...listState, adds]
                    );
                    reset()
                    break;
            }
        }
    }

    const reset = () => {
        document.getElementById("form").reset();
        setTipo('')
        setCantidad('')
        setNombre('')
    }

    return (
        <Row className='container_row'>
            <Col>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{textsModal.titulo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{textsModal.Descripcion}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
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
                        <Form.Text className="text-muted" hidden={displayNameInput}>
                            El campo nombre no puede estar vacío
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number" placeholder="Cantidad" onChange={handleCantidad} />
                        <Form.Text className="text-muted" hidden={displayCantidadInput}>
                            {textErrorCantidad}
                        </Form.Text>
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
                <List list={listState} setListState={setListState} />
            </Col>
        </Row>
    );
};

export default Register;