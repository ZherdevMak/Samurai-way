import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {StateType} from "./components/Redux/State";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


export type AppPropsType = {
    state: StateType
    store:any

}



function App(props: AppPropsType) {

    const state = props.state
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar store={props.store} />
                <div className="dialog_content">
                    <Route exact path='/Dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>

                    <Route path='/Profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
