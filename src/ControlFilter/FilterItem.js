function FilterItem(props){
    return(
               <option value={props.value}>{props.text}</option>
    )
}

export { FilterItem }