import "./OpenModalButton.css"
import React from "react"
import { ControlContext } from "../ControlContext"
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const iconActionTypes = {
    "edit": <FaRegEdit />,
    "add": <FaPlus />
}

function OpenModalButton(props) {
    const { 
        setOpenModal,
        setAction,
        setKeyId,
        setErrorValue,
    } = React.useContext( ControlContext )
    
    function openAction() {
        setOpenModal(state => !state);
        setAction(props.type)
        setKeyId(props.id)
        setErrorValue('')
    }

    return (
        <span
            onClick={() => openAction()}
            className={`button-${props.type} icon-list`}
        >
            {iconActionTypes[props.type]}
        </span>

    )
}

export { OpenModalButton }