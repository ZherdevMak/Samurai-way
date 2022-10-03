import {ArreyPostType} from "./State";
import {ProfileType} from "../Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../../Api/Api";

export type ProfileReduserStateType = {
    posts: ArreyPostType[],
    profile: ProfileType,
    status:string


}
let initialState: ProfileReduserStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
        {id: 3, message: 'Hi, how are you?', likesCount: 2},
        {id: 4, message: 'Hi, how a?', likesCount: 2},
    ],
    profile: {
        aboutMe:'',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website:'',
            youtube: '',
            mainLink: ''
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId:0,

    },
    status: ''

}

const ProfileReduser = (state:ProfileReduserStateType = initialState, action:MainProfileActionType):ProfileReduserStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: ArreyPostType = {
                id: 5,
                message: action.postBody,
                likesCount: 0
            }

            return {...state,posts:[...state.posts,newPost]}

        case 'SET-USER-PROFILE':
            return {...state,profile: action.profile};
        case 'SET-STATUS':
            return {...state,status: action.status};
        case "DELETE-POST":
            return {...state,posts: state.posts.filter(i => i.id != action.id)};
        default:
            return state
    }
};
type MainProfileActionType = addPostACType | setUserProfileType | GetStatusType | deletePostType
type addPostACType = ReturnType<typeof addPostActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>
type GetStatusType = ReturnType<typeof GetStatus>
type deletePostType = ReturnType<typeof deletePost>

export const addPostActionCreator = (postBody: string) => {

    return {
        type: 'ADD-POST',
        postBody
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
export const deletePost = (id: number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}
export const GetStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status: status
    } as const
}
export const getUserProfile = (userID: string) =>
    (dispatch: any) => {
        usersAPI.getProfile(userID).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
export const getStatus = (userID: string) =>
    (dispatch: any) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(GetStatus(response.data))
        })
    }
export const updateStatus = (status: any) =>
    (dispatch: any) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(GetStatus(status))
        })
    }

export default ProfileReduser;