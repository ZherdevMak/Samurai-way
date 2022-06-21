import React from 'react';
import './index.css';
import store from "./components/Redux/ReduxStore";
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireTree = (state:any) => {

    ReactDOM.render(<App state={state} store = {store} />,
        document.getElementById('root'));
}
renderEntireTree(store.getState())
store.subscribe(() => {
    let  state = store.getState();
    renderEntireTree(state)})
