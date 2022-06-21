import React from "react";
import comp from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";
export type ProfileType ={
    store:any
}

function Profile(props: ProfileType) {
    return (
        <main className={comp.content}>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}/>
        </main>)
}

export default Profile;