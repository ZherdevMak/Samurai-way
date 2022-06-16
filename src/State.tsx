export type ArreyDialogsType = {
    name: string,
    id: number
}
export type ArreyMessagesType = {
    message: string,
    id: number
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
        messages: ArreyMessagesType[]
    },
    profile: {
        posts: ArreyPostType[],
        newPostValue: string
    },
    sidebar: FriendsType[]
}
export type StoreType = {
    _state:StateType
    getState:()=>StateType
    renderEntireTree: ()=>void
    addPost: ()=>void
    addNewText:(newText:any)=>void
    subscribe:(observer: () => void)=>void
}

export let store:StoreType = {
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
                {message: 'Hi', id: 1},
                {message: 'Hello', id: 2},
                {message: 'Yo', id: 3},
                {message: 'How are you?', id: 4},
            ]
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
    addPost() {
        let newPost: ArreyPostType = {
            id: 5,
            message: this._state.profile.newPostValue,
            likesCount: 0
        }
        this._state.profile.posts.push(newPost)
        this._state.profile.newPostValue = ''
        this.renderEntireTree()
    },
    addNewText(newText: any)  {
        this._state.profile.newPostValue = newText
        this.renderEntireTree()
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    }
}








// let arreyDialogs:ArreyDialogsType[] = [
//     {name: 'Dimych', id: 1},
//     {name: 'Andrey', id: 2},
//     {name: 'Sveta', id: 3},
//     {name: 'Valera', id: 4},
//     {name: 'Sasha', id: 5},
// ]
// let arreyMessages: ArreyMessagesType[] = [
//     {message: 'Hi', id: 1},
//     {message: 'Hello', id: 2},
//     {message: 'Yo', id: 3},
//     {message: 'How are you?', id: 4},
// ]
// let arreyPost:ArreyPostType[] = [
//     {id: 1, message: 'Hi, how are you?', likesCount: 12},
//     {id: 2, message: 'It\'s my first post', likesCount: 10},
//     {id: 3, message: 'Hi, how are you?', likesCount: 2},
//     {id: 4, message: 'Hi, how a?', likesCount: 2},
// ]
// let friends:FriendsType[] = [
//     {id: 1, name: 'Sasha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
//     {id: 2, name: 'Masha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
//     {id: 3, name: 'Luba', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
// ]
// export let state: StateType = {
//     dialogs: {
//         dialogs: [
//             {name: 'Dimych', id: 1},
//             {name: 'Andrey', id: 2},
//             {name: 'Sveta', id: 3},
//             {name: 'Valera', id: 4},
//             {name: 'Sasha', id: 5},
//         ],
//         messages: [
//             {message: 'Hi', id: 1},
//             {message: 'Hello', id: 2},
//             {message: 'Yo', id: 3},
//             {message: 'How are you?', id: 4},
//         ]
//     },
//     profile: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 12},
//             {id: 2, message: 'It\'s my first post', likesCount: 10},
//             {id: 3, message: 'Hi, how are you?', likesCount: 2},
//             {id: 4, message: 'Hi, how a?', likesCount: 2},
//         ],
//         newPostValue: ""
//     },
//     sidebar: [
//         {id: 1, name: 'Sasha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
//         {id: 2, name: 'Masha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
//         {id: 3, name: 'Luba', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
//     ]
// }
// export const addPost = () => {
//     let newPost: ArreyPostType = {
//         id: 5,
//         message: state.profile.newPostValue,
//         likesCount: 0
//     }
//     state.profile.posts.push(newPost)
//     state.profile.newPostValue = ''
//     renderEntireTree()
// }
// export const addNewText = (newText: any) => {
//     state.profile.newPostValue = newText
//     renderEntireTree()
// }
// export const subscribe = (observer: () => void) => {
//     renderEntireTree = observer
// }

