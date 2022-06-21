import React from "react";
import {ProfileType} from "./Profile";
import {addNewTextActionCreator} from "../Redux/ProfileReduser";
import {addPostActionCreator} from "../Redux/ProfileReduser";
import MyPosts from "./MyPosts/MyPosts";
import {StateType} from "../Redux/State";

function MyPostsContainer (props: ProfileType) {
    let state:StateType = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator()).bind(props.store)
    }
    const newPostOnChange = (text: string) => {
        props.store.dispatch(addNewTextActionCreator(text))
    }
    return (
    <MyPosts post={state.profile.posts} addPost={addPost} newPostValue={state.profile.newPostValue}
                     newPostOnChange={newPostOnChange}/>)
}

export default MyPostsContainer

