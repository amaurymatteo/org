import { useState } from "react"
import "./ImputText.css"
const Imput = (props) => {
    // const [valor, actualizarValor] = useState("")
    const placeholderModificado = `${props.placeholder}...`

    // const manejarCambio = (event) => {
    //     props.actualizarValor(event.target.value)
    // }

    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`input input-${type}`}>
        <label>{ props.titulo }</label>
        <input 
            placeholder={ placeholderModificado } 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Imput