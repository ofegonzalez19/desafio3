import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = ({onSubmit, setAlerta }) => {
    const [colaborador, setColaborador] = useState({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",

    });

    const cambioInput = (e) => {
        setColaborador(
            {
                ...colaborador,
                [e.target.name]: e.target.value,
            }
        );
    }

    const cambioForm = (e) => {
        e.preventDefault()
        if (colaborador.nombre === "" ||
            colaborador.correo === "" ||
            colaborador.edad === "" ||
            colaborador.cargo === "" ||
            colaborador.telefono === "") {
            setAlerta({
                msg: "Completa todos los campos",
                color: "danger",
            })
            return;

        }
        setAlerta({
            msg: "Colaborador agregado exitosamente",
            color: "success",
        });
        onSubmit(colaborador);
        
        setColaborador({
            nombre: "",
            correo: "",
            edad: "",
            cargo: "",
            telefono: "",
        });
    }

    return (
        <Form onSubmit={cambioForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    className="my-3"
                    type="text"
                    placeholder="Nombre de Colaborador"
                    onChange={cambioInput}
                    name="nombre"
                    value={colaborador.nombre} />

                <Form.Control
                    className="my-3"
                    type="email"
                    placeholder="Email del colaborador"
                    onChange={cambioInput}
                    name="correo"
                    value={colaborador.correo}
                />
                <Form.Control
                    className="my-3"
                    type="text"
                    placeholder="Edad del colaborador"
                    onChange={cambioInput}
                    name="edad"
                    value={colaborador.edad}
                />
                <Form.Control
                    className="my-3"
                    type="text"
                    placeholder="Cargo del colaborador"
                    onChange={cambioInput}
                    name="cargo"
                    value={colaborador.cargo}
                />
                <Form.Control
                    className="my-3"
                    type="text"
                    placeholder="telefono del colaborador"
                    onChange={cambioInput}
                    name="telefono"
                    value={colaborador.telefono}
                />
                <Button variant="primary" type="submit">
                    Agregar colaborador
                </Button>

            </Form.Group>
        </Form>
    )
}

export default Formulario