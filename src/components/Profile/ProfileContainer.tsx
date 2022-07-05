import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {setUserProfile} from "../Redux/ProfileReduser";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
type mapStateToPropsType = {
    profile:any

}
type mapDispatchToPropsType ={
    setUserProfile:(profile:string)=>void
}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        profile:state.profile
    }
}





export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);