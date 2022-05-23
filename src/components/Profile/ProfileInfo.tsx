import React from "react";
import comp from './ProfileInfo.module.css'



function ProfileInfo() {
    return (
         <div>
            <img src='https://html5css.ru/css/img_forest.jpg'></img>
            <article className={comp.discriptionBlock}>
            ava+discription
             </article>
        </div>)
}

export default ProfileInfo;