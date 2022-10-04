import {v1} from "uuid";
import {ArreyDialogsType, ArreyMessagesType} from "./State";

export type DialogsReduserStateType = {
    dialogs: ArreyDialogsType[],
    messages: ArreyMessagesType[]

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

}

const DialogsReduser = (state: DialogsReduserStateType = initialState,action:MainDialogActionType):DialogsReduserStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: ArreyMessagesType = {

                id: v1(),
                message: action.messageBody,
            }
            return {...state,messages:[...state.messages,newMessage]}

        default:
            return state
    }
};
export type MainDialogActionType = addNewMessageACType
type addNewMessageACType = ReturnType<typeof addNewMessageCreator>
export const addNewMessageCreator = (messageBody:string) => {
    return {
        type: 'ADD-MESSAGE',
        messageBody
    } as const
}


export default DialogsReduser;
