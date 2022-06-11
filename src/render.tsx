import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DataDialogType} from './App';
import State, {addNewText, addPost, StateType} from "./State";


export let renderEntireTree = (state: StateType )=> {
    ReactDOM.render(<App dialogs={state.dialogs.dialogs} newPostValue={state.profile.newPostValue} addNewText = {addNewText} messages={state.dialogs.messages}
                         friends={state.sidebar} post={state.profile.posts} addPost={addPost}/>,
        document.getElementById('root'));
}