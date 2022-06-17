import React from 'react';
import {ActionTypes, ArreyPostType} from "./State";

type ProfileReduserStateType = {
    posts: ArreyPostType[],
    newPostValue: string
}

const ProfileReduser = (action: ActionTypes, state: ProfileReduserStateType) => {
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