import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";
import {v1} from "uuid";

type PostType = {
    message: string
    likesCount: number
    id: number
}
type MyPostsType = {
    post:PostType[]
    addPost:()=>void
    newPostOnChange:(text:string)=>void
    newPostValue:string
}
function MyPosts(props:MyPostsType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
    props.addPost()
    }
    const posts = props.post.map((p) => <Post key={v1()} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const newPostOnChange = () => {
        if (newPostElement.current!==null){
        let text = newPostElement.current.value
        props.newPostOnChange(text)
    }}
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
export default MyPosts

