import React from "react";
import comp from './Dialogs.module.css'
import {v1} from "uuid";
import Item from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    addNewMessageCreator,
    addNewMessageTextActionCreator,

} from "../Redax/DialogsReduser";
import {ArreyDialogsType} from "../Redax/State";

export type itemProps = {
    'name': string;
    'id': number;
}
export type messageProps = {
    'message': string
}
export type DialogsType = {
    dialogs?: ArreyDialogsType[]
    messages?: messageProps[]
    dispatch: (action:any) => void
    newMessageValue:string
}

export function Dialogs(props:DialogsType) {
    let newText = React.createRef<HTMLTextAreaElement>()

   const newPostOnChange = () => {
       if (newText.current!==null){
           let text = newText.current.value
           props.dispatch(addNewMessageTextActionCreator(text))}
   }
    const addPost = () => {
        props.dispatch(addNewMessageCreator())
    }
    // const newMessage = () => {
    //     let text = newText.current?.value
    //     alert(text)
    // }


    const dialogs = props.dialogs?.map((d) => {
        return (
            <div key={v1()}>
                <div><Item name={d.name} id={d.id}/></div>
            </div>
        )
    })

    const addMessage = props.messages?.map((m) => {

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
                    <textarea ref={newText} onChange={newPostOnChange} value={props.newMessageValue}></textarea>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
    )

}

