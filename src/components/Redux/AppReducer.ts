import {getAuthDataThunk} from "./Auth-reducer";


export type AppReduserStateType = {
    initialised: boolean

}
const INITIALISED = 'INITIALISED'

let initialState: AppReduserStateType = {
    initialised: false

}
export const AppReduser = (state: AppReduserStateType = initialState, action: SetInitialisedACType): AppReduserStateType => {

    switch (action.type) {
        case INITIALISED:
            return {
                ...state, initialised: true
            }
        default:
            return state

    }
}


export type SetInitialisedACType = ReturnType<typeof SetInitialisedAC>


export const SetInitialisedAC = () => {
    return {
        type: INITIALISED,
    } as const
}
export const initialiseThunk = () =>
    (dispatch: any) => {
        let promise = dispatch(getAuthDataThunk())
        promise.then(() => {
            dispatch(SetInitialisedAC())
        })
    }
