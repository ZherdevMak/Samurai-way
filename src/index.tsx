import React from 'react';
import './index.css';
import {addNewText, addPost, state, StateType, subscribe} from "./State";
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireTree = ()=> {
    ReactDOM.render(<App dialogs={state.dialogs.dialogs} newPostValue={state.profile.newPostValue} addNewText = {addNewText} messages={state.dialogs.messages}
                         friends={state.sidebar} post={state.profile.posts} addPost={addPost}/>,
        document.getElementById('root'));
}
renderEntireTree()
subscribe(renderEntireTree)