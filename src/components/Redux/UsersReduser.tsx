import React from 'react';
import {v1} from "uuid";

export type UsersStateType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}
export type UsersReduserStateType = {
    users: Array<UsersStateType>
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
let initialState = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2dd179dd-8c5a-4d5d-ad11-34b30529dac1/1920x',
            followed: true,
            fullName: 'Dmitry',
            status: 'Boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2dd179dd-8c5a-4d5d-ad11-34b30529dac1/1920x',
            followed: false,
            fullName: 'Sergey',
            status: 'Chief',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2dd179dd-8c5a-4d5d-ad11-34b30529dac1/1920x',
            followed: false,
            fullName: 'Victor',
            status: 'Red Chief',
            location: {city: 'Kiew', country: 'Ukrane'}
        },
    ],

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