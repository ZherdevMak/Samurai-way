import React from "react";
import comp from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";


function Profile(props:any) {
    return (
        <main className={comp.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </main>)
}

export default Profile;