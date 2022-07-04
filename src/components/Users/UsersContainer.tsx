import React from "react";
import {AppStateType} from "../Redux/ReduxStore";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UsersStateType
} from "../Redux/UsersReduser";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader";

type mapStateToPropsType = {
    users: Array<UsersStateType>,
    pageSize: number
    totalUsersCount: number,
    currentPage:number,
    isFetching:boolean

}
type mapDispatchToPropsType ={
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
    setUsers:(users:UsersStateType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersApi extends React.Component<UsersPropsType> {
    componentDidMount() {
    this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (el:number) =>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)

        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      users={this.props.users}/>
        </>

    }}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        users:state.users.users,
        pageSize:state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage,
        isFetching:state.users.isFetching
    }
}
// let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
//     return {
//         follow: (userID) => {dispatch(followAC(userID))},
//         unfollow: (userID) => {dispatch(unfollowAC(userID))},
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
//         setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
//         isFetchingfunc: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
//     }
// }

export const UsersContainer = connect (mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching}) (UsersApi)


