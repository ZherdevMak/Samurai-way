import React from "react";
import comp from './ProfileInfo.module.css'



function ProfileInfo(props:any) {
    return (
         <div>
            <img src='https://html5css.ru/css/img_forest.jpg' alt={'picture'}></img>
            <article className={comp.discriptionBlock}>
                <img src={props.profile.profile.photos?.large} alt="profile"/>
                <div>About me {props.profile.profile.aboutMe}</div>
                <div>Contacts: {props.profile.profile.fullName}</div>
                <div></div>
             </article>
        </div>)
}

export default ProfileInfo;