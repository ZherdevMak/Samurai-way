import React from "react";
import comp from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {DataDialogType} from "../../App";


function Profile(props: DataDialogType) {
    return (
        <main className={comp.content}>
            <ProfileInfo/>
            <MyPosts post={props.post} friends={props.friends} addPost={props.addPost} addNewText={props.addNewText}
                     newPostValue={props.newPostValue}/>
        </main>)
}

export default Profile;