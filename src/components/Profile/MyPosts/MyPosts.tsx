import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";
import {DataDialogType} from "../../../App";
import {v1} from "uuid";


function MyPosts(props: DataDialogType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let empty = ""
    const clearText = () => {
        if (newPostElement.current)
            newPostElement.current.value = empty
    }
    const addPost = () => {

        props.addPost()

    }
    const posts = props.post?.map((p) => <Post key={v1()} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const newPostOnChange = () => {
        let text = newPostElement.current?.value
        props.addNewText && props.addNewText(text)
    }
    return (<div>
        <article className={comp.posts}>
            My posts
            <article>
                <div>
                    <textarea ref={newPostElement} onChange={newPostOnChange} value={props.newPostValue} />
                </div>
                <button onClick={addPost}>Add Post</button>
                <button>Remove</button>
            </article>
        </article>
        {posts}
    </div>)
}

export default MyPosts;