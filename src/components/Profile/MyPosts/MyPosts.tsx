import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";

let arreyPost = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 10},
    {id: 3, message: 'Hi, how are you?', likesCount: 2},
    {id: 4, message: 'Hi, how are you?', likesCount: 2},
]
function MyPosts() {
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
        <Post message = {arreyPost[0].message} like={arreyPost[0].likesCount} />
        <Post message = {arreyPost[1].message} like={arreyPost[1].likesCount} />
        <Post message = {arreyPost[2].message} like={arreyPost[2].likesCount} />
        <Post message = {arreyPost[3].message} like={arreyPost[3].likesCount} />

    </div>)
}
export default MyPosts;