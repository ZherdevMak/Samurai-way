import React from 'react';
import './App.css';
import NavBar from "./components/Nav/Nav";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


export type AppPropsType = {

    store: any
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar store={props.store}/>
                <div className="dialog_content">
                    <Route exact path='/Dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route exact path='/Users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/Profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
