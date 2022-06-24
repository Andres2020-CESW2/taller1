import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./styles/Register.css"


const Register = () => {
    return (
        <>
            <Form className='container_form'>
                <Form.Group className="mb-3">
                    <Form.Label>Tipo de Movimiento:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Selecciona el tipo</option>
                        <option value="1">Ingreso</option>
                        <option value="2">Gastos</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text" placeholder="Cantidad"  />
                </Form.Group>
                <Button variant="secundary">
                    Cancelar
                </Button>
                <Button variant="primary">
                    Agregar Movimiento
                </Button>
            </Form>
        </>
    );
};

export default Register;