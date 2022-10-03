import ProfileReduser, {addPostActionCreator, deletePost} from "./ProfileReduser";
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
        {id: 3, message: 'Hi, how are you?', likesCount: 2},
        {id: 4, message: 'Hi, how a?', likesCount: 2},
    ]}
test('add new message', () => {

    let action = addPostActionCreator("New Post")
    // @ts-ignore
    let newState = ProfileReduser(state, action)
    expect(newState.posts.length).toBe(5)
})
test('text should be correct', () => {

    let action = addPostActionCreator("New Post")
    // @ts-ignore
    let newState = ProfileReduser(state, action)
    expect(newState.posts[4].message).toBe("New Post")
})
test('post lenght shoud be 3', () => {

    let action = deletePost(1)
    // @ts-ignore
    let newState = ProfileReduser(state, action)
    expect(newState.posts.length).toBe(3)
})
