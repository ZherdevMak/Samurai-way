import React from "react";
import comp from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type itemProps = {
    'name': string;
    'id': number;
}
type messageProps = {
    'message': string
}

function Item(props: itemProps) {
    return (
        <div className={comp.item + ' ' + comp.active}>
            <NavLink to={'/Dialogs/1' + props.id}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: messageProps) {
    return (
        <div className={comp.message}>{props.message}</div>
    )
}
let arreyDialogs = [
    {name: 'Dimych', id: 1},
    {name: 'Andrey', id: 2},
    {name: 'Sveta', id: 3},
    {name: 'Valera', id: 4},
    {name: 'Sasha', id: 5},
]
let arreyMessages = [
    {message: 'Hi', id: 1 },
    {message: 'Hello', id: 2 },
    {message: 'Yo', id: 3 },
    {message: 'How are you?', id: 4 },
]

function Dialogs() {
    return (<div className={comp.dialogs}>
        <div className={comp.dialogsItems}>
            <Item name={arreyDialogs[0].name} id={arreyDialogs[0].id}/>
            <Item name={arreyDialogs[1].name} id={arreyDialogs[1].id}/>
            <Item name={arreyDialogs[2].name} id={arreyDialogs[2].id}/>
            <Item name={arreyDialogs[3].name} id={arreyDialogs[3].id}/>
            <Item name={arreyDialogs[4].name} id={arreyDialogs[4].id}/>
        </div>
        <div className={comp.messages}>
            <Message message={arreyMessages[0].message}/>
            <Message message={arreyMessages[1].message}/>
            <Message message={arreyMessages[2].message}/>
            <Message message={arreyMessages[3].message}/>

        </div>

    </div>)
}

export default Dialogs;