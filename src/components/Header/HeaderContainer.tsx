import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {SetUserDataAC} from "../Redux/Auth-reducer";
import {AppStateType} from "../Redux/ReduxStore";
import stl from './Header.module.css'

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response => {
           if (response.data.resultCode === 0) {
               let {id,email,login} = response.data.data
               this.props.SetUserDataAC(id,email,login)
           }
        })
    }
   render () {return (
        <div className={stl.Header}>
            <Header {...this.props} />
        </div>
    );
}}
type mapStateToPropsType = {
    isAuth:boolean,
    login:string|null
}
type mapDispatchToPropsType = {
    SetUserDataAC:(id: number | null, email: string | null, login: string | null)=>void
}
export type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state:AppStateType):mapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect (mapStateToProps,{SetUserDataAC}) (HeaderContainer);