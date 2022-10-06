import React from 'react';
import './App.css';
import NavBar from "./components/Nav/Nav";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initialiseThunk} from "./components/Redux/AppReducer";
import store, {AppStateType} from "./components/Redux/ReduxStore";
import Preloader from "./components/Common/Preloader";
// const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
// const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))

export type AppPropsType = {

    store: any
}

class App extends React.Component<any> {
    componentDidMount() {
        this.props.initialiseThunk()
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader/>
        } else {
            return (

                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <NavBar/>
                        <div className="dialog_content">
                            <Route exact path='/Dialogs'
                                   render={() => <DialogsContainer/>}/>
                            <Route exact path='/Users'
                                   render={() => <UsersContainer/>}/>
                            <Route exact path='/Login'
                                   render={() => <Login/>}/>
                            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/News' render={() => <News/>}/>
                            <Route path='/Music' render={() => <Music/>}/>
                            <Route path='/Settings' render={() => <Settings/>}/>
                        </div>
                    </div>
                )
        }
    }
}

const MapStateToProps = (state: AppStateType) => ({
    initialised: state.app.initialised
})
const AppWithRouter = connect(MapStateToProps, {initialiseThunk})(App);
const SamuraiJSApp = () => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppWithRouter/>
        </Provider>
    </BrowserRouter>)
}
export default SamuraiJSApp