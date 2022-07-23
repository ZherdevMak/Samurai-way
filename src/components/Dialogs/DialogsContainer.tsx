import React from "react";
import {
    addNewMessageCreator, addNewMessageTextActionCreator, DialogsReduserStateType,
} from "../Redux/DialogsReduser";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";
import {getUserProfile, setUserProfile} from "../Redux/ProfileReduser";

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
        dialogs: state.dialogs,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost: () => {dispatch(addNewMessageCreator())},
        newPostOnChange: (text:string) => {dispatch(addNewMessageTextActionCreator(text))}
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile,getUserProfile}),
    WithAuthRedirect,
)(Dialogs)


