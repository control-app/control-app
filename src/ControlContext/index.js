import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ControlContext = React.createContext();

function ControlProvider ( {children} ) {
    const [view, setView] = React.useState('main');
    const [action, setAction] = React.useState('');
    const [keyId, setKeyId] = React.useState('');
    const [errorValue, setErrorValue] = React.useState('');

    const categories = [{
        type: 'income',
        name: 'ingreso',
        value: 0,
    },{
        type: 'expensive',
        name: 'gasto',
        value: 0,
    },{
        type: 'saving',
        name: 'ahorro',
        value: 0,
    },{
        type: 'balance',
        name: 'saldo',
        value: 0,
    }];

    const month = [
        "Enero", 
        "Febrero", 
        "Marzo", 
        "Abril", 
        "Mayo", 
        "Junio", 
        "Julio", 
        "Agosto", 
        "Septiembre", 
        "Octubre", 
        "Noviembre", 
        "Diciembre"
    ];

    const {
        item: data,
        saveItem,
    } = useLocalStorage('DATA_V1', []);

    const currentMonth = new Date().getMonth().toString();
    const [monthFilter, setMonthFilter] = React.useState(currentMonth);
    const incomeTotal = data.filter(item => item.type === 'income' && item.month === month[monthFilter]).reduce((acc,item) => acc + item.value, 0);
    const expensiveTotal = data.filter(item => item.type === 'expensive' && item.month === month[monthFilter]).reduce((acc,item) => acc + item.value, 0);
    const savingTotal = data.filter(item => item.type === 'saving').reduce((acc,item) => acc + item.value, 0);
    const savingCurrent = data.find(item => item.type === 'saving' && item.month === month[monthFilter]);
    const balance = savingCurrent ? (incomeTotal - expensiveTotal - savingCurrent.value).toFixed(2): (incomeTotal - expensiveTotal).toFixed(2);
    const categoryData = data.filter(item => item.type === view && item.month === month[monthFilter]);

    const [openModal, setOpenModal] = React.useState(false);
   

    class dataItem {
        constructor(type, category, value, date, key) {
            this.type = type;
            this.category = category;
            this.value = value;
            this.date = date;
            this.month = month[new Date(date).getMonth()];
            this.year = new Date(date).getFullYear();
            this.key = key;
        }
    }

    const addData = (type, category, value, date, key) => {
        const newData = [...data];
        newData.push(new dataItem(type, category, value, date, key));
        saveItem(newData);
    }

    const deleteData = (key) => {
        const newData = [...data];
        const dataIndex = newData.findIndex( item => item.key === key);
        newData.splice(dataIndex,1);
        saveItem(newData);
    }

    const editData = (type, category, value, date, key) => {
        const newData = [...data];
        const keyId = key;
        console.log(keyId);
        const dataIndex = newData.findIndex( item => item.key === keyId);
        console.log(dataIndex);
        newData.splice(dataIndex,1, new dataItem(type, category, value, date, keyId));
        saveItem(newData);
    }

    const findData = (key) => {
        const newData = [...data];
        const dataIndex = newData.findIndex( item => item.key === key);
        if (dataIndex !== -1) {
            return newData[dataIndex];
        }
    }

    const dateFormat = (date) => {
        const dateYear = date.getFullYear();
        let dateMonth;
        
        const dateMonthFixed = date.getMonth()+1
        
        if (dateMonthFixed < 10) {
            dateMonth = '-0' + dateMonthFixed
        } else {
            dateMonth= '-' + dateMonthFixed
        }
    
        const dateDay = date.getDate();
        
        const formatDate = dateYear +  dateMonth + '-' + dateDay;

        return formatDate;
    }

    return (
        <ControlContext.Provider value={{
            view,
            setView,
            categories,
            data,
            incomeTotal,
            expensiveTotal,
            savingTotal,
            balance,
            openModal,
            setOpenModal,
            addData,
            deleteData,
            month,
            currentMonth,
            setMonthFilter,
            categoryData,
            editData,
            action,
            setAction,
            findData,
            dateFormat,
            keyId,
            setKeyId,
            errorValue, 
            setErrorValue
        }}>
            { children }
        </ControlContext.Provider>
    );
}

export { ControlContext, ControlProvider };