function SelectOptions(props) {

    return (
        <div>
            <select id="expensive-categories" required defaultValue={props.category}>    
                <option value="alquiler">Alquiler</option>
                <option value="comida">Comida</option>
                <option value="transporte">Transporte</option>
                <option value="movil">Movil</option>
                <option value="salud">Salud</option>
                <option value="prestamo">Prestamo</option>
                <option value="belleza">Bellaza</option>
                <option value="gym">Gym</option>
                <option value="ocio">Ocio</option>
                <option value="otros">Otros</option>
            </select>
        </div>

    )
}

export { SelectOptions }