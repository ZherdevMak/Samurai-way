import React from 'react';
import './App.css';
import Technologies from "./Tecnologies";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Profile />
        </div>);
}


export default App;
