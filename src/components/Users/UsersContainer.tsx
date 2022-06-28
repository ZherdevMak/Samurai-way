import React from "react";
import {AppStateType} from "../Redux/ReduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersStateType} from "../Redux/UsersReduser";
import Users from "./Users";

type mapStateToPropsType = {
    users: Array<UsersStateType>
}
type mapDispatchToPropsType ={
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UsersStateType[])=>void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        users:state.users.users

    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

export const UsersContainer = connect (mapStateToProps,mapDispatchToProps) (Users)


