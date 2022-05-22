import React from 'react';
import './App.css';
import Technologies from "./Tecnologies";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Profile />
            {/*<div className="dialog_content">*/}
            {/*    <Dialogs />*/}
            {/*</div>*/}

        </div>);
}


export default App;
