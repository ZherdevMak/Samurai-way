import React from "react";
import comp from './Dialogs.module.css'
import {v1} from "uuid";
import Item from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DataDialogType} from "../../App";

export type itemProps = {
    'name': string;
    'id': number;
}
export type messageProps = {
    'message': string
}


function Dialogs(props: DataDialogType) {
    // @ts-ignore
    const dialogs = props.dialogs.map((d) => {
        return (
            <div key={v1()}>
                <div><Item name={d.name} id={d.id}/></div>
            </div>
        )
    })
    // @ts-ignore
    const messages = props.messages.map((m) => {
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