import React from "react";
import comp from './Dialogs.module.css'
import {v1} from "uuid";
import Item from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    addNewMessageCreator,
    addNewMessageTextActionCreator,

} from "../Redux/DialogsReduser";
import {ArreyDialogsType} from "../Redux/State";
import {Dialogs} from "./Dialogs";

export type itemProps = {
    'name': string;
    'id': number;
}
export type messageProps = {
    'message': string
}
export type DialogsContainerType = {
    store: any
}

export function DialogsContainer(props: DialogsContainerType) {
    let state = props.store.getState()

    const newPostOnChange = (text:string) => {

            props.store.dispatch(addNewMessageTextActionCreator(text))
        }

    const addPost = () => {
        props.store.dispatch(addNewMessageCreator()).bind(props.store)
    }



    return (
        <Dialogs  addPost={addPost} dialogs={state.dialogs.dialogs} messages={state.dialogs.messages}
                 newMessageValue={state.dialogs.newMessageValue} newPostOnChange={newPostOnChange}/>
    )

}

