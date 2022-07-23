import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {getUserProfile, setUserProfile} from "../Redux/ProfileReduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType,
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userID:string) => void
}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profile.profile,
    }
}

export default compose<React.ComponentType>(
connect(mapStateToProps, {setUserProfile,getUserProfile}),
withRouter,
WithAuthRedirect,
)(ProfileContainer)