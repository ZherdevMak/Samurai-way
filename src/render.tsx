import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DataDialogType} from './App';
import {addPost} from "./State";

export let renderEntireTree = (state:any)=> {
    ReactDOM.render(<App dialogs={state.dialogs.dialogs} messages={state.dialogs.messages}
                         friends={state.sidebar} post={state.profile.posts} addPost={addPost}/>,
        document.getElementById('root'));
}