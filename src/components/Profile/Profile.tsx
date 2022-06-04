import React from "react";
import comp from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {DataDialogType} from "../../App";


function Profile(props: DataDialogType) {
    return (
        <main className={comp.content}>
            <ProfileInfo />
            <MyPosts post ={props.post} />
        </main>)
}
export default Profile;