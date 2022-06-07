let arreyDialogs = [
    {name: 'Dimych', id: 1},
    {name: 'Andrey', id: 2},
    {name: 'Sveta', id: 3},
    {name: 'Valera', id: 4},
    {name: 'Sasha', id: 5},
]
let arreyMessages = [
    {message: 'Hi', id: 1},
    {message: 'Hello', id: 2},
    {message: 'Yo', id: 3},
    {message: 'How are you?', id: 4},
]
let arreyPost = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 10},
    {id: 3, message: 'Hi, how are you?', likesCount: 2},
    {id: 4, message: 'Hi, how a?', likesCount: 2},
]
let friends = [
    {id: 1, name: 'Sasha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
    {id: 2, name: 'Masha', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
    {id: 3, name: 'Luba', avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'},
]
export let state = {
    dialogs: {
        dialogs: arreyDialogs,
        messages: arreyMessages
    },
    profile: {
        posts: arreyPost
    },
    sidebar: friends
}
export const addPost = (postText) => {
    let newPost = {
        id: 5,
        message: postText,
        likesCount: 0
    }
    state.profile.posts.push(newPost)
}