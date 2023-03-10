import PropType from "prop-types";

const Instrucoes = (props) => {
    return (
        <div>
            <h2>Modo de preparo</h2>
            <ol>
                <li>{props.lista[0]}</li>
                <li>{props.lista[1]}</li>
                <li>{props.lista[2]}</li>
            </ol>
        </div>
    )
}

Instrucoes.PropType = {
lista: PropType.array.isRequired,
}

export default Instrucoes;