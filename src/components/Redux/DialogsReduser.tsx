import React from 'react';
import {v1} from "uuid";
import {ActionTypes, ArreyDialogsType, ArreyMessagesType} from "./State";

type ProfileReduserStateType = {
    dialogs: ArreyDialogsType[],
    messages: ArreyMessagesType[],
    newMessageValue: string
}
let initialState = {
    dialogs: [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Sveta', id: 3},
        {name: 'Valera', id: 4},
        {name: 'Sasha', id: 5},
    ],
    messages: [
        {message: 'Hi', id: v1()},
        {message: 'Hello', id: v1()},
        {message: 'Yo', id: v1()},
        {message: 'How are you?', id: v1()},
    ],
    newMessageValue: ""
}

const DialogsReduser = (state: ProfileReduserStateType = initialState,action:  any = {}) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: ArreyMessagesType = {
                id: v1(),
                message: state.newMessageValue,
            }
            state.messages.push(newMessage)
            state.newMessageValue = ''
            return state;
        case 'ADD-NEW-MESSAGE-TEXT':
            state.newMessageValue = action.newMessageValue
            return state;
        default:
            return state
    }
};
export const addNewMessageCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const addNewMessageTextActionCreator = (messageText: string) => {
    return {
        type: 'ADD-NEW-MESSAGE-TEXT',
        newMessageValue: messageText
    }
}

export default DialogsReduser;
