import React from "react";
import comp from './Post.module.css'

type PostProps = {
    message: string
    like: number
}
function Post(props : PostProps) {
    return (
        <article className={comp.item}>
            {props.message}
            <article>
                <img src='https://image.gala.de/21985322/t/O-/v5/w960/r1.5/-/avatar.jpg'></img>
                <span>{props.like}</span>
            </article>
        </article>
)
}

export default Post;