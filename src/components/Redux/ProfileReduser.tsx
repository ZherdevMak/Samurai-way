import React from 'react';
import {ActionTypes, ArreyPostType} from "./State";

type ProfileReduserStateType = {
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

const ProfileReduser = (state = initialState, action:any = {}) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: ArreyPostType = {
                id: 5,
                message: state.newPostValue,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostValue = '';
            return state;
        case 'ADD-NEW-TEXT':
            state.newPostValue = action.newText
            return state;
        default:
            return state
    }
};
export const addPostActionCreator = () => {

    return {
        type: 'ADD-POST'
    }
}
export const addNewTextActionCreator = (text: string) => {
    return {
        type: 'ADD-NEW-TEXT',
        newText: text
    }
}
export default ProfileReduser;