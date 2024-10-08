import React from "react";
import "./ControlFilter.css"
import { FilterItem } from "./FilterItem";
import { ControlContext } from "../ControlContext";

function ControlFilter() {
    const {
        month,
        currentMonth,
        setMonthFilter,
    } = React.useContext(ControlContext)
     
    return (
        <select 
            id="month" 
            defaultValue={currentMonth}
            onChange={(event) => {
                setMonthFilter(event.target.value);
            }}
            className="selectMonth"        
        >
            {month.map( (month,index) =>
                <FilterItem 
                    value={index}
                    text={month}
                    key={month}
                />
            )}
        </select>
    )
}

export { ControlFilter };