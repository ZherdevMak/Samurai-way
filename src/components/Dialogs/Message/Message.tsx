import React from "react";
import comp from '../Dialogs.module.css'
import {v1} from "uuid";

type messageProps = {
    'message': string
}

function Message(props: messageProps) {
    return (
        <div key={v1()} className={comp.message}>{props.message}</div>
    )
}

export default Message;