import { useState } from "react"
import "./MyOrg.css"

const MyOrg = (props) => {

    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="org-section">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>

    }

export default MyOrg