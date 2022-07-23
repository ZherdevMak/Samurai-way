import {ArreyPostType} from "./State";
import {ProfileType} from "../Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../../Api/Api";

export type ProfileReduserStateType = {
    posts: ArreyPostType[],
    newPostValue: string,
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
    newPostValue: "",
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
                message: state.newPostValue,
                likesCount: 0
            }
            // state.posts.push(newPost)
            // state.newPostValue = '';
            return {...state,posts:[...state.posts,newPost],newPostValue:""}
        case 'ADD-NEW-TEXT':
            let newPostInputvalue = action.newText
            return {...state,newPostValue:newPostInputvalue};
        case 'SET-USER-PROFILE':
            return {...state,profile: action.profile};
        case 'SET-STATUS':
            return {...state,status: action.status};
        default:
            return state
    }
};
type MainProfileActionType = addPostACType | addNewTextACType | setUserProfileType | GetStatusType
type addPostACType = ReturnType<typeof addPostActionCreator>
type addNewTextACType = ReturnType<typeof addNewTextActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>
type GetStatusType = ReturnType<typeof GetStatus>

export const addPostActionCreator = () => {

    return {
        type: 'ADD-POST'
    } as const
}
export const addNewTextActionCreator = (text: string) => {
    return {
        type: 'ADD-NEW-TEXT',
        newText: text
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
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