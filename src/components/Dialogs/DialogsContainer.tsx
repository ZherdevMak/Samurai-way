import React from "react";
import {
    addNewMessageCreator, DialogsReduserStateType,
} from "../Redux/DialogsReduser";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogs:DialogsReduserStateType
}
type mapDispatchToPropsType ={
    addPost: (messageBody:string)=>void
}
export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogs,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (messageBody) => {dispatch(addNewMessageCreator(messageBody))}

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)


