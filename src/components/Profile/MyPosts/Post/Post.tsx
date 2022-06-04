import React from "react";
import comp from './Post.module.css'

export type PostProps = {
    id:number
    message: string
    likesCount: number
}
function Post(props : PostProps) {
    return (
        <article className={comp.item}>
            {props.message}
            <article key={props.id}>
                <img src='https://image.gala.de/21985322/t/O-/v5/w960/r1.5/-/avatar.jpg'></img>
                <span>{props.likesCount}</span>
                <span>{props.id}</span>
            </article>
        </article>
)
}

export default Post;