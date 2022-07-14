import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {getUserProfile, setUserProfile} from "../Redux/ProfileReduser";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileType = {
    aboutMe: string
    contacts: ContactsProps
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosProps
    userId: number
}
type ContactsProps = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosProps = {
    small: string
    large: string
}
type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType,
    isAuth:boolean
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userID:string) => void
}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profile.profile,
        isAuth:state.auth.isAuth
    }
}
let withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile,getUserProfile})(withUrlProfileContainer);