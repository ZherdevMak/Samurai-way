import React from 'react';
import './index.css';
import store from "./components/Redux/ReduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";



export let renderEntireTree = (state: any) => {

    ReactDOM.render(<Provider store={store}><App state={state} store={store}/></Provider>,
        document.getElementById('root'));
}
renderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state)
})
export default Provider
