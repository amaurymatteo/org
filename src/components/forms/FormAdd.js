import { useState } from "react"
import "./FormAdd.css"
import Imput from "../ImputText"
import OptionsList from "../OptionsList"
import Button from "../button"

const FormAdd = (props) => {

    const [nombre,actulizarNombre] = useState("")
    const [puesto,actulizarPuesto] = useState("")
    const [foto,actulizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
    const [titulo,actualizarTitulo] = useState("")
    const [color,actulizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }


   return <section className="form">
    <form onSubmit={manejarEnvio}>
        <h2>
            Rellena el formulario para crear el colaborador.
        </h2>
        <Imput
            titulo="Nombre" 
            placeholder="Ingreasar Nombre" 
            required
            valor={nombre}
            actualizarValor={actulizarNombre}
        />
        <Imput
            titulo="Puesto" 
            placeholder="Ingreasar Puesto" 
            required
            valor={puesto}
            actualizarValor={actulizarPuesto}
        />
        <Imput
            titulo="Foto" 
            placeholder="Agregar Foto" 
            required
            valor={foto}
            actualizarValor={actulizarFoto}
        />
        <OptionsList 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
        />
        <Button textButton="Crear"/>
    </form>

    <form onSubmit={manejarNuevoEquipo}>
        <h2>
            Rellena el formulario para crear el equipo.
        </h2>
        <Imput
            titulo="Titulo" 
            placeholder="Ingreasar Titulo" 
            required
            valor={titulo}
            actualizarValor={actualizarTitulo}
        />
        <Imput
            titulo="Color" 
            placeholder="Ingreasar color en Hex" 
            required
            valor={color}
            actualizarValor={actulizarColor}
            type="color"
        />
        <Button textButton="Registrar equipo"/>
    </form>
   </section> 
}


export default FormAdd