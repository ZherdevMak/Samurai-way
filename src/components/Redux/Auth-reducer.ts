

export type AuthReduserStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean

}


const SET_USER_DATA = 'SET_USER_DATA'




let initialState:AuthReduserStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

export const AuthReduser = (state:AuthReduserStateType = initialState, action: SetUserDataACType): AuthReduserStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            isAuth:true}
        default: return state

}}

export type SetUserDataACType = ReturnType<typeof SetUserDataAC>


export const SetUserDataAC = (id: number | null, email: string | null, login: string | null) => {
    return {
        type: SET_USER_DATA,
        data: {id,email,login}
    } as const
}
