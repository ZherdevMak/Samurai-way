import React from "react";
import comp from './Post.module.css'


function Post() {
    return (
        <article className={comp.item}>
            Post
            <article>
                <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/304px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg'></img>
                <span>Like</span>
            </article>
        </article>
)
}

export default Post;