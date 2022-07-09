export type UserPhotos = {
    small: string | null
    large: string | null
}

export type UsersStateType = {
    id: string,
    photos: UserPhotos,
    followed: boolean,
    name: string,
    status: string,
    // location: { city: string, country: string }
}
export type UsersReduserStateType = {
    users: Array<UsersStateType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress: string[]
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHIN'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'


let initialState: UsersReduserStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 198,
    isFetching: false,
    followingInProgress: []
}

const UsersReduser = (state = initialState, action: MainUsersActionType): UsersReduserStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(el => {
                        if (el.id === action.userID) {
                            return {...el, followed: true}
                        }
                        return el
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(el => {
                        if (el.id === action.userID) {
                            return {...el, followed: false}
                        }
                        return el
                    }
                )
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state, followingInProgress: action.isFollowing
                    ? [...state.followingInProgress,action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
};
type MainUsersActionType = followACType | unfollowACType | setUsersACType |
    setCurrentPageACType | setTotalUsersCountACType | toggleIsFetchingACType | toggleIsFollowingACType
type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingACType = ReturnType<typeof toggleIsFollowing>

export const follow = (userID: string) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollow = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setUsers = (users: UsersStateType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    } as const
}
export const toggleIsFollowing = (isFollowing: boolean, userID: string) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFollowing: isFollowing,
        userID: userID

    } as const
}

export default UsersReduser;