import React from "react";
import comp from './Profile.module.css'


function Profile() {
    return (<main className={comp.content}>
        <img src='https://html5css.ru/css/img_forest.jpg'></img>
        <article>
            ava+discription
        </article>
        <article className='posts'>
            My posts
            <article>
                New post
            </article>
        </article>
        <article>
            <article className={comp.item}>
                Post 1
            </article>
            <article className={comp.item}>
                Post 2
            </article>
        </article>

    </main>)
}
export default Profile;