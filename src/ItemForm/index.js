import React from "react";
import "./ItemForm.css"
import { ControlContext } from "../ControlContext"
import { SelectOptions } from "./SelectOptions";

function ItemForm() {

    const {
        view,
        categories,
        setOpenModal,
        addData,
        action,
        keyId,
        setKeyId,
        dateFormat,
        findData,
        editData,
        errorValue, 
        setErrorValue,
    } = React.useContext( ControlContext );

    const dataItem = categories.find( item => item.type === view );  
    const dataName = dataItem.name;

    const dataInfo = findData(keyId);
    const dateItem = dataInfo ? dataInfo.date : dateFormat(new Date());
    const amountItem = dataInfo ? dataInfo.value : 0;
    const categoryItem = dataInfo ? dataInfo.category : '';
    

   
    const onSubmit = (event) => {
        event.preventDefault();
        const itemType = view;
        let itemCategory = ''
        if (view === 'expensive') {
            itemCategory = event.target[2].value;
            
        } else {
            itemCategory = dataName;
        }

        const itemValue = parseFloat(event.target[0].value);
        const itemDate = event.target[1].value;
        const itemKey = new Date().getTime();

        
        if (itemValue <= 0) {
            setErrorValue('El valor debe ser mayor a Cero')
        } else {
            if (action === 'add') {
                addData(itemType, itemCategory, itemValue, itemDate, itemKey)
            } else {
                editData(itemType, itemCategory, itemValue, itemDate, keyId)
            }
            setOpenModal(false);
            setKeyId('');
            setErrorValue('')
        }

    };

    const onCancel = () => {
        setOpenModal(false);
        setErrorValue('')
    };

    return(
   
    <form onSubmit={onSubmit}>
        <label id="label-add-data">Agrega un {dataName}</label>
        <input type="number" step=".01" id="textarea-add-data" placeholder="Importe" defaultValue={amountItem} required/>
        <input type="date" defaultValue={dateItem}required/>
        {view === 'expensive' && <SelectOptions
            category={categoryItem}
        />}
        <div>
            <button type="button" onClick={onCancel}>Cerrar</button>
            <button type="submit">Enviar</button>
        </div>
        <p>{errorValue}</p>
    </form>
    )
}

export { ItemForm }