import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts() {
    return (<main className={comp.content}>
        <article className='posts'>
            My posts
            <article>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </article>
        </article>
        <Post />
        <Post />
        <Post />
        <Post />
    </main>)
}
export default MyPosts;