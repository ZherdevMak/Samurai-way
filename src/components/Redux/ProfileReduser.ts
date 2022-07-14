import {ArreyPostType} from "./State";
import {ProfileType} from "../Profile/ProfileContainer";
import {usersAPI} from "../../Api/Api";

export type ProfileReduserStateType = {
    posts: ArreyPostType[],
    newPostValue: string,
    profile: ProfileType

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
        userId:0
    }
}

const ProfileReduser = (state:ProfileReduserStateType = initialState, action:MainProfileActionType):{ newPostValue: string; profile: ProfileType; posts: ArreyPostType[] } => {

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
        default:
            return state
    }
};
type MainProfileActionType = addPostACType | addNewTextACType | setUserProfileType
type addPostACType = ReturnType<typeof addPostActionCreator>
type addNewTextACType = ReturnType<typeof addNewTextActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>

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
export const getUserProfile = (userID: string) =>
    (dispatch: any) => {
        usersAPI.getProfile(userID).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
export default ProfileReduser;