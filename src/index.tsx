import React from 'react';
import './index.css';
import {store} from "./State";
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()} dispatch = {store.dispatch.bind(store)} />,
        document.getElementById('root'));
}
renderEntireTree()
store.subscribe(renderEntireTree)
console.log(store._state)