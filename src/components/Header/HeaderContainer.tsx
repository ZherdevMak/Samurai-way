import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC, SetUserDataAC} from "../Redux/Auth-reducer";
import {AppStateType} from "../Redux/ReduxStore";
import stl from './Header.module.css'


class HeaderContainer extends React.Component<HeaderContainerType> {


    render() {
        return (
            <div className={stl.Header}>
                <Header {...this.props} />
            </div>
        );
    }
}

type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null

}
type mapDispatchToPropsType = {
    SetUserDataAC: (id: number | null, email: string | null, login: string | null,isAuth:boolean) => void
    logoutTC: () => void
}
export type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {SetUserDataAC, logoutTC})(HeaderContainer);