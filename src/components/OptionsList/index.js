import "./OptionsList.css"
const OptionsList = (props) => {


    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }
    return <div className="options-list">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> ) }
        </select>
        {/* <select>
            { teams.map( (team, index) => {
                return <option key={index}>{team}</option>
            } ) }
        </select> */}
    </div>
}

export default OptionsList