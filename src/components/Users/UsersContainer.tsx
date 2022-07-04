import React from "react";
import {AppStateType} from "../Redux/ReduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersStateType
} from "../Redux/UsersReduser";
import Users from "./Users";

type mapStateToPropsType = {
    users: Array<UsersStateType>,
    pageSize: number
    totalUsersCount: number,
    currentPage:number
}
type mapDispatchToPropsType ={
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UsersStateType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        users:state.users.users,
        pageSize:state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))}
    }
}

export const UsersContainer = connect (mapStateToProps,mapDispatchToProps) (Users)


