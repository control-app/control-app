import React from "react";

function useLocalStorage(itemName, initialValue) {
    
    React.useEffect(() =>  {
        setTimeout(() => {
            // try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

            // }
        },[])
    });

    const [item, setItem] = React.useState(initialValue);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
    }
}

export { useLocalStorage }