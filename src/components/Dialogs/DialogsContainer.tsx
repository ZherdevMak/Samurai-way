import React from "react";
import {
    addNewMessageCreator, addNewMessageTextActionCreator, DialogsReduserStateType,
} from "../Redux/DialogsReduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogs:DialogsReduserStateType
}
type mapDispatchToPropsType ={
    addPost: ()=>void
    newPostOnChange:(text:string)=>void
}
export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogs
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost: () => {dispatch(addNewMessageCreator())},
        newPostOnChange: (text:string) => {dispatch(addNewMessageTextActionCreator(text))}
    }
}

export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)

