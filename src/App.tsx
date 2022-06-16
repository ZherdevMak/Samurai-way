import React from 'react';
import './App.css';
import Technologies from "./Tecnologies";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs, {itemProps} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {messageProps} from "./components/Dialogs/Dialogs";
import {PostProps} from "./components/Profile/MyPosts/Post/Post";
import {FriendsType} from "./components/Nav/Friends/Friends";
import {StateType, store} from "./State";

export type DataDialogType = {
    dialogs?: () => StateType
    messages?: messageProps[]
    post?: PostProps[]
    friends?: FriendsType[]
    addPost: () => void
    newPostValue?: string
    addNewText?: (newText: string | undefined) => void
}


function App(props: DataDialogType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar friends={props.friends} addPost={store.addPost}/>
                <div className="dialog_content">
                    <Route exact path='/Dialogs'
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/Profile' render={() => <Profile newPostValue={props.newPostValue} post={props.post}
                                                                  addNewText={props.addNewText} addPost={store.addPost}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
