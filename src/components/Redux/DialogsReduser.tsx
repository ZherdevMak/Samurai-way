import React from 'react';
import {v1} from "uuid";
import {ArreyDialogsType, ArreyMessagesType} from "./State";

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

const DialogsReduser = (state: ProfileReduserStateType = initialState,action:MainDialogActionType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: ArreyMessagesType = {
                id: v1(),
                message: state.newMessageValue,
            }
            return {...state,messages:[...state.messages,newMessage],newMessageValue:""}
        case 'ADD-NEW-MESSAGE-TEXT':
             let newMessages = action.newMessageValue
            return {...state,newMessageValue:newMessages};
        default:
            return state
    }
};
type MainDialogActionType = addNewMessageACType | addNewMessageTextACType
type addNewMessageACType = ReturnType<typeof addNewMessageCreator>
type addNewMessageTextACType = ReturnType<typeof addNewMessageTextActionCreator>
export const addNewMessageCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const addNewMessageTextActionCreator = (messageText: string) => {
    return {
        type: 'ADD-NEW-MESSAGE-TEXT',
        newMessageValue: messageText
    } as const
}

export default DialogsReduser;
