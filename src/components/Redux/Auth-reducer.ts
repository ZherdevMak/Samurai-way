import {authAPI} from "../../Api/Api";
import {stopSubmit} from "redux-form";
import {AppDispatch, AppThunk} from "./ReduxStore";


export type AuthReduserStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}
const SET_USER_DATA = 'SET_USER_DATA'

let initialState: AuthReduserStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}
export const AuthReduser = (state: AuthReduserStateType = initialState, action: SetUserDataACType): AuthReduserStateType => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state

  }
}


export type SetUserDataACType = ReturnType<typeof SetUserDataAC>


export const SetUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
  } as const
}
export const getAuthDataThunk = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data
      dispatch(SetUserDataAC(id, email, login, true))
    }
  }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk =>
  async (dispatch: AppDispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
      dispatch(getAuthDataThunk())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "some errore"
      dispatch(stopSubmit('login', {_error: message}))
    }
  }
export const logoutTC = () =>
  async (dispatch: AppDispatch) => {
    let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch((SetUserDataAC(null, null, null, false))
        )
      }
  }
