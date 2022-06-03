import React from "react";
import comp from './Dialogs.module.css'
import {v1} from "uuid";
import Item from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

type itemProps = {
    'name': string;
    'id': number;
}
type messageProps = {
    'message': string
}


let arreyDialogs = [
    {name: 'Dimych', id: 1},
    {name: 'Andrey', id: 2},
    {name: 'Sveta', id: 3},
    {name: 'Valera', id: 4},
    {name: 'Sasha', id: 5},
]
let arreyMessages = [
    {message: 'Hi', id: 1},
    {message: 'Hello', id: 2},
    {message: 'Yo', id: 3},
    {message: 'How are you?', id: 4},
]

function Dialogs() {
    const dialogs = arreyDialogs.map((d) => {
        return (
            <div key={v1()}>
                <div><Item name={d.name} id={d.id}/></div>
            </div>
        )
    })
    const messages = arreyMessages.map((m) => {
        return (
            <div key={v1()}>
                <div><Message message={m.message}/></div>
            </div>
        )
    })
    return (<div className={comp.dialogs}>
            <div className={comp.dialogsItems}>
                {dialogs}
            </div>
            <div className={comp.messages}>
                {messages}
            </div>

        </div>
    )

}

export default Dialogs;