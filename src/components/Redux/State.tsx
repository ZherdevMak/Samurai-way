import {v1} from "uuid";
import ProfileReduser from "./ProfileReduser";
import DialogsReduser from "./DialogsReduser";
import SidebarReduser from "./SidebarReduser";

export type ArreyDialogsType = {
    name: string,
    id: number
}
export type ArreyMessagesType = {
    message: string,
    id: string
}
export type ArreyPostType = {
    id: number,
    message: string,
    likesCount: number

}

export type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
export type StateType = {
    dialogs: {
        dialogs: ArreyDialogsType[],
        messages: ArreyMessagesType[],
        newMessageValue: string
    },
    profile: {
        posts: ArreyPostType[],
        newPostValue: string
    },
    sidebar: FriendsType[]
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}
export type ActionTypes = AddPostType | AddNewText | AddMessageType | AddMessageTextType
export type AddPostType = {
    type: 'ADD-POST'
}
export type AddNewText = {
    type: 'ADD-NEW-TEXT'
    newText: string
}
export type AddMessageType = {
    type: 'ADD-MESSAGE'
}
export type AddMessageTextType = {
    type: 'ADD-NEW-MESSAGE-TEXT'
    newMessageValue:string
}

export let store: StoreType = {
    _state: {
        dialogs: {
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
        },
        profile: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 10},
                {id: 3, message: 'Hi, how are you?', likesCount: 2},
                {id: 4, message: 'Hi, how a?', likesCount: 2},
            ],
            newPostValue: ""
        },
        sidebar: [
            {
                id: 1,
                name: 'Sasha',
                avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'
            },
            {
                id: 2,
                name: 'Masha',
                avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'
            },
            {
                id: 3,
                name: 'Luba',
                avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'
            },
        ]
    },
    getState() {
        return this._state
    },
    renderEntireTree() {
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    },

    dispatch(action) {
        // @ts-ignore
        this._state.profile = ProfileReduser(action, this._state.profile)
        // @ts-ignore
        this._state.dialogs = DialogsReduser(action, this._state.dialogs)
        this._state.sidebar = SidebarReduser(action, this._state.sidebar)
        this.renderEntireTree()
    }
}


