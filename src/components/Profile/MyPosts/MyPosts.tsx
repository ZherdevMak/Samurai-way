import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";
import {v1} from "uuid";
import {ProfileType} from "../Profile";


function MyPosts(props: ProfileType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        props.dispatch({type:'ADD-POST'})

    }
    const posts = props.post?.map((p) => <Post key={v1()} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const newPostOnChange = () => {
        if (newPostElement.current!==null){
        let text = newPostElement.current.value
        props.dispatch({type:'ADD-NEW-TEXT', newText:text})}
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