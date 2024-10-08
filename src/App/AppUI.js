import React from 'react';
import { MainInfo } from '../MainInfo';
import { ControlContext } from '../ControlContext';
import { ControlFilter } from '../ControlFilter';
import { CategoryInfo } from '../CategoryInfo'
import { ItemForm } from '../ItemForm';
import { Modal } from '../Modal';
import "./App.css"


function AppUI() {
    const {
        view,
        openModal,
        // openEditModal,
    } = React.useContext(ControlContext)
    
    return (
        <>
            <div className="Filter">
                <ControlFilter/>
            </div>
            <div className="View">
                {(view === 'main') && 
                    <MainInfo/>
                }
                {(view !== 'main') && 
                    <CategoryInfo/>
                }
            </div>
            {openModal && (
                <Modal>
                    <ItemForm />
                </Modal>
            )}
        </>
    )
}

export { AppUI };