import React from 'react';
import {ArreyPostType} from "./State";

export type ProfileReduserStateType = {
    posts: ArreyPostType[],
    newPostValue: string
}
let initialState: ProfileReduserStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
        {id: 3, message: 'Hi, how are you?', likesCount: 2},
        {id: 4, message: 'Hi, how a?', likesCount: 2},
    ],
    newPostValue: ""
}

const ProfileReduser = (state:ProfileReduserStateType = initialState, action:MainProfileActionType):ProfileReduserStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: ArreyPostType = {
                id: 5,
                message: state.newPostValue,
                likesCount: 0
            }
            // state.posts.push(newPost)
            // state.newPostValue = '';
            return {...state,posts:[...state.posts,newPost],newPostValue:""}
        case 'ADD-NEW-TEXT':
            let newPostInputvalue = action.newText
            return {...state,newPostValue:newPostInputvalue};
        default:
            return state
    }
};
type MainProfileActionType = addPostACType | addNewTextACType
type addPostACType = ReturnType<typeof addPostActionCreator>
type addNewTextACType = ReturnType<typeof addNewTextActionCreator>

export const addPostActionCreator = () => {

    return {
        type: 'ADD-POST'
    } as const
}
export const addNewTextActionCreator = (text: string) => {
    return {
        type: 'ADD-NEW-TEXT',
        newText: text
    } as const
}
export default ProfileReduser;