import React from "react";
import comp from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (<main className={comp.content}>
        <img src='https://html5css.ru/css/img_forest.jpg'></img>
        <article>
            ava+discription
        </article>
        <MyPosts />
    </main>)
}
export default Profile;