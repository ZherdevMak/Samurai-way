import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


export type AppPropsType = {

    store: any
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar store={props.store}/>
                <div className="dialog_content">
                    <Route exact path='/Dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route exact path='/Users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/Profile' render={() => <Profile />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
