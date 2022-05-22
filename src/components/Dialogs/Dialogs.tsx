import React from "react";
import comp from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


function Dialogs() {
    return (<div className={comp.dialogs}>
                <div className={comp.dialogsItems}>
                    <div className={comp.item + ' ' + comp.active}>
                       <NavLink to='/Dialogs/1'>Dimych</NavLink>
                    </div>
                    <div className={comp.item}>
                        <NavLink to='/Dialogs/2'>Andrey</NavLink>
                    </div>
                    <div className={comp.item}>
                        <NavLink to='/Dialogs/3'>Sveta</NavLink>
                    </div>
                    <div className={comp.item}>
                        <NavLink to='/Dialogs/4'>Valera</NavLink>
                    </div>
                    <div className={comp.item}>
                        <NavLink to='/Dialogs/5'>Sasha</NavLink>
                    </div>
                </div>
                <div className={comp.messages}>
                    <div className={comp.message}>Hi</div>
                    <div className={comp.message}>Hello</div>
                    <div className={comp.message}>Yo</div>
                    <div className={comp.message}>How are you?</div>
                </div>

    </div>)
}

export default Dialogs;