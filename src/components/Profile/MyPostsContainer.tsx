import React from "react";
import {addNewTextActionCreator, ProfileReduserStateType} from "../Redux/ProfileReduser";
import {addPostActionCreator} from "../Redux/ProfileReduser";
import MyPosts from "./MyPosts/MyPosts";
import {AppStateType} from "../Redux/ReduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapStateToPropsType = ProfileReduserStateType

type mapDispatchToPropsType ={
    addPost: ()=>void
    newPostOnChange:(text:string)=>void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        posts:state.profile.posts,
        newPostValue:state.profile.newPostValue
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        newPostOnChange: (text:string) => {dispatch(addNewTextActionCreator(text))}
    }
}

export const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts)


