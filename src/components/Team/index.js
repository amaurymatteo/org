import "./Team.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiiloTitulo = { borderColor: colorPrimario }

    return <>
    {
        colaboradores.length > 0 &&
        <section className="team" style={obj}>
            <input
                type="color"
                className="input-color2"
                value={colorPrimario}
                onChange={(event) => {
                    actualizarColor(event.target.value, id)
                }}
            />

            <h3 style={estiiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {/* <Colaborador /> */}
                {
                    colaboradores.map( (colaborador,index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    /> )
                }
            </div>
        </section>
    }
    </>
}

export default Team