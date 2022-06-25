import React from 'react';
import './index.css';
import store from "./components/Redux/ReduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

    ReactDOM.render(<Provider store={store}><App store={store}/></Provider>,
        document.getElementById('root'));

export default Provider
