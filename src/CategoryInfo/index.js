import React from "react";
import { ItemList } from "../ItemList";
import { ItemItem } from "../ItemItem";
import { ControlContext } from "../ControlContext";
import "./CategoryInfo.css"




function CategoryInfo() {
    const {
        deleteData,
        categoryData,
    } = React.useContext(ControlContext);

     

    return (
        <div className="Category-info-container">
            <ItemList>
                {categoryData.map( item => 
                    <ItemItem
                        key={item.key}
                        id={item.key}
                        onDelete={() => deleteData(item.key)}
                    />
            )}
            </ItemList>
        </div>
    )   
}

export { CategoryInfo };