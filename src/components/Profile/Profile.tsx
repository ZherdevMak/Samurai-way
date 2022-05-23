import React from "react";
import comp from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";


function Profile() {
    return (
        <main className={comp.content}>
            <ProfileInfo />
            <MyPosts />
        </main>)
}
export default Profile;