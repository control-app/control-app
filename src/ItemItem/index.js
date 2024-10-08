import "./ItemItem.css"
import React from "react";
import { OpenModalButton } from "../OpenModalButton";
import { ControlContext } from "../ControlContext";
import { TiDelete } from "react-icons/ti";



function ItemItem(props) {

    const {
        findData,
    } = React.useContext(ControlContext)

    const item = findData(props.id);
    const date = new Date(item.date);
    const dateLocal = date.toLocaleDateString();     
     
    return (
        <>
            <li className={`ItemItem`}>
                <div className="ItemText">
                    <p>
                        {item.category} {item.value}€ {dateLocal}
                    </p>
                </div>
                <div className="IconDelete">
                    <TiDelete 
                        onClick={props.onDelete} 
                        className="IconList"
                    />
                </div>
                <div className="IconEdit IconList">
                    <OpenModalButton
                        type={'edit'}
                        name={'Editar'}
                        id={item.key}
                    />
                </div>
            </li>
        </>
    )
}

export { ItemItem };