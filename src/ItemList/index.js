import React from "react";
import { ControlContext } from "../ControlContext";
import { OpenModalButton } from "../OpenModalButton";
import "./ItemList.css"



function ItemList(props){
    const {
        view,
        setView,
        categories,
        setOpenModal,
    } = React.useContext(ControlContext);

    const indexCategory = categories.findIndex( item => item.type === view);
    const categoryName = categories[indexCategory].name;
    // const categoryTittle = categoryName[0].toUpperCase() + categoryName.substring(1);   
    
    function closeCategory() {
        setView('main');
        setOpenModal(false)
    }
    
    return(
        <>
            <div className="item-container">
                <h2 onClick={() => closeCategory()}>{categoryName}</h2>
                <ul className="itemlList">
                    {props.children}
                </ul>
                <OpenModalButton 
                    type={'add'}
                    name={'+'}
                    id={''}
                />
            </div>

        </>
    ) 
}

export { ItemList }