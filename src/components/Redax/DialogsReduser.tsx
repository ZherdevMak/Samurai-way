import React from 'react';
import {v1} from "uuid";
import {ActionTypes, ArreyDialogsType, ArreyMessagesType} from "./State";

type ProfileReduserStateType = {
    dialogs: ArreyDialogsType[],
    messages: ArreyMessagesType[],
    newMessageValue: string
}

const DialogsReduser = (action: ActionTypes, state: ProfileReduserStateType) => {

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
