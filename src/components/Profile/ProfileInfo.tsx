import React from "react";
import comp from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";



function ProfileInfo(props:any) {
    return (
         <div>
            <img src='https://html5css.ru/css/img_forest.jpg' alt={'picture'}></img>
            <article className={comp.discriptionBlock}>
                <img src={props.profile.photos?.large} alt="profile"/>
                <ProfileStatus status={'Hello'}/>
                <div>About me {props.profile.aboutMe}</div>
                <div>Contacts: {props.profile.fullName}</div>
                <div></div>
             </article>
        </div>)
}

export default ProfileInfo;