import { ControlContext } from "../ControlContext";
import './ControlItem.css'
import React from "react";

function ControlItem(props) {
    const {
        setView,
        incomeTotal,
        expensiveTotal,
        savingTotal,
        balance,
    } = React.useContext(ControlContext)

    if (props.type === 'balance') {
        return (
            <li className={`ControlItem item-${props.type}`}>
                <p>{props.name} {balance}€</p>
            </li>
        )        

    } else {
        const arrayType = props.type + 'Total'

        const total = {
            incomeTotal,
            expensiveTotal,
            savingTotal
        }[arrayType];
                
        return (
            <li className={`ControlItem item-${props.type}`} onClick={() => setView(props.type)}>
                <p>{props.name} {total}€</p>
            </li>
        )

    }    
}

export { ControlItem };