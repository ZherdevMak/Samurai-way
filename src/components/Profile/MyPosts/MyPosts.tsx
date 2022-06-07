import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";
import {DataDialogType} from "../../../App";


function MyPosts(props: DataDialogType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text)
    }
    const posts = props.post?.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (<div>
        <article className={comp.posts}>
            My posts
            <article>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Add Post</button>
                <button>Remove</button>
            </article>
        </article>
        {posts}
    </div>)
}

export default MyPosts;