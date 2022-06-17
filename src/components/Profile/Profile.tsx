import React from "react";
import comp from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ArreyPostType} from "../../State";
export type ProfileType ={
    post:ArreyPostType[]
    dispatch: (action:any) => void
    newPostValue:string

}

function Profile(props: ProfileType) {
    return (
        <main className={comp.content}>
            <ProfileInfo/>
            <MyPosts post={props.post} dispatch={props.dispatch}
                     newPostValue={props.newPostValue}/>
        </main>)
}

export default Profile;