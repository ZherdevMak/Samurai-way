import React from "react";
import comp from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";


function Profile() {
    return (
        <main className={comp.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>)
}

export default Profile;