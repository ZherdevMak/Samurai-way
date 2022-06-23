import React from "react";
import comp from './Dialogs.module.css'
import {v1} from "uuid";
import Item from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {ArreyDialogsType, ArreyMessagesType} from "../Redux/State";

export type messageProps = {
    'message': string
}
export type DialogsType = {
    dialogs: {
    dialogs: ArreyDialogsType[],
    messages: ArreyMessagesType[],
    newMessageValue: string
}
    addPost: () => void
    // newMessageValue:string
    newPostOnChange: (text:string)=> void
}

export function Dialogs(props:DialogsType) {

    let newText = React.createRef<HTMLTextAreaElement>()

   const newPostOnChange = () => {
       if (newText.current!==null){
           let text = newText.current.value
           props.newPostOnChange(text)}
   }
    const addPost = () => {
        props.addPost()
    }

    const dialogs = props.dialogs.dialogs.map((d) => {
        return (
            <div key={v1()}>
                <div><Item name={d.name} id={d.id}/></div>
            </div>
        )
    })

    const addMessage = props.dialogs.messages.map((m: { message: string; }) => {

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
            <div>
                <div className={comp.messages}>
                    {addMessage}
                </div>
                <div>
                    <textarea ref={newText} onChange={newPostOnChange} value={props.dialogs.newMessageValue}></textarea>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
    )

}

