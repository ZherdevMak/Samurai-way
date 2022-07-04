import React from 'react';
export type UserPhotos = {
    small: string | null
    large: string | null
}

export type UsersStateType = {
    id: string,
    photos: UserPhotos,
    followed: boolean,
    name: string,
    status: string,
    // location: { city: string, country: string }
}
export type UsersReduserStateType = {
    users: Array<UsersStateType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'




let initialState:UsersReduserStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage:198
}

const UsersReduser = (state = initialState, action: MainUsersActionType): UsersReduserStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(el => {
                        if (el.id === action.userID) {
                            return {...el, followed: true}
                        }
                        return el
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(el => {
                        if (el.id === action.userID) {
                            return {...el, followed: false}
                        }
                        return el
                    }
                )
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage }
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount:action.totalCount }
        default:
            return state
    }
};
type MainUsersActionType = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setUsersAC = (users:UsersStateType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount:number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const
}

export default UsersReduser;