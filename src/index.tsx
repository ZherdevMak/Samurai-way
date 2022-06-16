import React from 'react';
import './index.css';
import {store} from "./State";
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireTree = () => {
    ReactDOM.render(<App dialogs={store.getState} newPostValue={store._state.profile.newPostValue}
                         addNewText={store.addNewText} messages={store._state.dialogs.messages}
                         friends={store._state.sidebar} post={store._state.profile.posts} addPost={store.addPost}/>,
        document.getElementById('root'));
}
renderEntireTree()
store.subscribe(renderEntireTree)
console.log(store._state)