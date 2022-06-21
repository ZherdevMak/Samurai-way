import React from "react";
import comp from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ArreyPostType} from "../Redux/State";
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