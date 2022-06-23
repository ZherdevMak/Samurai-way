import React from "react";
import {
    addNewMessageCreator, addNewMessageTextActionCreator
} from "../Redux/DialogsReduser";
import {Dialogs} from "./Dialogs";
import {StateType, store} from "../Redux/State";
import {connect} from "react-redux";


// export type DialogsContainerType = {
//     store: any
// }

// export function DialogsContainer(props: any) {
//     debugger
//     let state: StateType = props.store.getState()
//
//     const newPostOnChange = (text: string) => {
//
//         props.store.dispatch(addNewMessageTextActionCreator(text))
//     }
//
//     const addPost = () => {
//         props.store.dispatch(addNewMessageCreator()).bind(props.store)
//     }
//     return (
//         <Dialogs addPost={addPost} dialogs={state.dialogs} newPostOnChange={newPostOnChange}/>
//     )
// }
let mapStateToProps = (state:any) => {
    return {
        dialogs: state.dialogs
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: () => {dispatch(addNewMessageCreator())},
        newPostOnChange: (text:string) => {dispatch(addNewMessageTextActionCreator(text))}
    }
}

export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)

