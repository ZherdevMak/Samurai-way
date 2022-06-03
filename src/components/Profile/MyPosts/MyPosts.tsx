import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";

let arreyPost = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 10},
    {id: 3, message: 'Hi, how are you?', likesCount: 2},
    {id: 4, message: 'Hi, how a?', likesCount: 2},
]
function MyPosts() {
    const posts = arreyPost.map(p => <Post message = {p.message} like={p.likesCount} />)
    return (<div>
        <article className={comp.posts}>
            My posts
            <article>
                    <div>
                <textarea></textarea>
                    </div>
                <button>Add Post</button>
                <button>Remove</button>
            </article>
        </article>
        {posts}
    </div>)
}
export default MyPosts;