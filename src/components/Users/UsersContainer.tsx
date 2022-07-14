import React from "react";
import {AppStateType} from "../Redux/ReduxStore";
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowing,
    unfollow, unfollowThunkCreator,
    UsersStateType
} from "../Redux/UsersReduser";
import Users from "./Users";
import Preloader from "../Common/Preloader";

type mapStateToPropsType = {
    users: Array<UsersStateType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    isFollowing: string[]


}
type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersStateType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowing: (isFollowing: boolean,userID: string) => void
    getUsersThunkCreator:(currentPage:number, pageSize:number)=>void
    followThunkCreator:(userID:string)=>void
    unfollowThunkCreator:(userID:string)=>void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersApi extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (el: number) => {
        this.props.getUsersThunkCreator(el,this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.followThunkCreator}
                   unfollow={this.props.unfollowThunkCreator}
                   users={this.props.users}
                   ToggleFollowing={this.props.toggleIsFollowing}
                   isFollowing={this.props.isFollowing} />
        </>

    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowing: state.users.followingInProgress
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

export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
    toggleIsFollowing,getUsersThunkCreator,followThunkCreator,unfollowThunkCreator
})(UsersApi)


