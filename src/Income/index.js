import React from "react";
import { ControlContext } from "../ControlContext";

function Income() {
    const {
        setView,
    } = React.useContext(ControlContext)

    return (
        <div 
        onClick={
            () => setView('income')
        }
        >Ingresos de este mes: 500 euros este mes</div>
    )   
}

export { Income };