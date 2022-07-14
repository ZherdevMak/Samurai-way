import React from "react";
import {
    addNewMessageCreator, addNewMessageTextActionCreator, DialogsReduserStateType,
} from "../Redux/DialogsReduser";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";

type mapStateToPropsType = {
    dialogs:DialogsReduserStateType
    isAuth:boolean
}
type mapDispatchToPropsType ={
    addPost: ()=>void
    newPostOnChange:(text:string)=>void
}
export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogs,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost: () => {dispatch(addNewMessageCreator())},
        newPostOnChange: (text:string) => {dispatch(addNewMessageTextActionCreator(text))}
    }
}

export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)

