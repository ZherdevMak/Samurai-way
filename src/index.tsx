import React from 'react';
import './index.css';
import {store} from "./State";
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()} addNewText={store.addNewText.bind(store)} addPost={store.addPost.bind(store)} />,
        document.getElementById('root'));
}
renderEntireTree()
store.subscribe(renderEntireTree)
console.log(store._state)