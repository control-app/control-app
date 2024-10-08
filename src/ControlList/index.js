import "./ControlList.css"

function ControlList(props) {

    return(
        <ul className="ControlList">
            {props.children}
        </ul>
    ) 
}

export { ControlList };