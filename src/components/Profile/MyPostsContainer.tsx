import React from "react";
import {addPostActionCreator} from "../Redux/ProfileReduser";
import MyPosts from "./MyPosts/MyPosts";
import {AppStateType} from "../Redux/ReduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ArreyPostType} from "../Redux/State";

type mapStateToPropsType = {
    posts: ArreyPostType[],
}

type mapDispatchToPropsType ={
    addPost: (postBody: string)=>void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        posts:state.profile.posts,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (postBody:string) => {dispatch(addPostActionCreator(postBody))},
    }
}

export const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts)


