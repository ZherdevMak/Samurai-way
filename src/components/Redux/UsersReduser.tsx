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
    users: Array<UsersStateType>
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'



let initialState:UsersReduserStateType = {
    users: []
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
            return {...state, users: [...state.users,...action.users]}
        default:
            return state
    }
};
type MainUsersActionType = followACType | unfollowACType | setUsersACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

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

export default UsersReduser;