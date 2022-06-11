import {renderEntireTree} from "./render";
type ArreyDialogsType = {
    name: string,
    id: number
}
type ArreyMessagesType = {
    message: string,
    id: number
}
type ArreyPostType = {
    id: number,
    message: string,
    likesCount: number

}
// type NewPostType = {
//     newPostValue: string
// }
type FriendsType = {
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

let arreyDialogs:ArreyDialogsType[] = [
    {name: 'Dimych', id: 1},
    {name: 'Andrey', id: 2},
    {name: 'Sveta', id: 3},
    {name: 'Valera', id: 4},
    {name: 'Sasha', id: 5},
]
let arreyMessages: ArreyMessagesType[] = [
    {message: 'Hi', id: 1},
    {message: 'Hello', id: 2},
    {message: 'Yo', id: 3},
    {message: 'How are you?', id: 4},
]
let arreyPost:ArreyPostType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 10},
    {id: 3, message: 'Hi, how are you?', likesCount: 2},
    {id: 4, message: 'Hi, how a?', likesCount: 2},
]
let friends:FriendsType[] = [
    {id: 1, name: 'Sasha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
    {id: 2, name: 'Masha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
    {id: 3, name: 'Luba', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
]

export let state:StateType = {
    dialogs: {
        dialogs: arreyDialogs,
        messages: arreyMessages
    },
    profile: {
        posts: arreyPost,
        newPostValue: ""
    },
    sidebar: friends
}
export const addPost = () => {
    let newPost:ArreyPostType = {
        id: 5,
        message: state.profile.newPostValue,
        likesCount: 0
    }
    state.profile.posts.push(newPost)
    state.profile.newPostValue = ''
    renderEntireTree(state)
}
export const addNewText = (newText:any) => {
    state.profile.newPostValue = newText
    renderEntireTree(state)
}
export default state