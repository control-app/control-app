import React from "react";
import { ControlList } from "../ControlList";
import { ControlItem } from "../ControlItem";
import { ControlContext } from "../ControlContext";




function MainInfo() {
    const {
        categories,
    } = React.useContext(ControlContext);

    return (
        <ControlList>
            {categories.map( item => 
                <ControlItem
                    key={item.type}
                    type={item.type}
                    name={item.name}
                    value={item.value}
                />
        )}
        </ControlList>
    )   
}

export { MainInfo };