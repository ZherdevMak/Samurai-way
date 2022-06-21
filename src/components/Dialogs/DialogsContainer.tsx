import React from "react";
import {
    addNewMessageCreator, addNewMessageTextActionCreator
} from "../Redux/DialogsReduser";
import {Dialogs} from "./Dialogs";
import {StateType} from "../Redux/State";


export type DialogsContainerType = {
    store: any
}

export function DialogsContainer(props: DialogsContainerType) {
    let state: StateType = props.store.getState()

    const newPostOnChange = (text: string) => {

        props.store.dispatch(addNewMessageTextActionCreator(text))
    }

    const addPost = () => {
        props.store.dispatch(addNewMessageCreator()).bind(props.store)
    }
    return (
        <Dialogs addPost={addPost} dialogs={state.dialogs.dialogs} messages={state.dialogs.messages}
                 newMessageValue={state.dialogs.newMessageValue} newPostOnChange={newPostOnChange}/>
    )
}

