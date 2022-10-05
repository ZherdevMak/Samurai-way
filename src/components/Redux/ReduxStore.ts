import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import ProfileReduser, {MainProfileActionType} from "./ProfileReduser";
import DialogsReduser, {MainDialogActionType} from "./DialogsReduser";
import SidebarReduser from "./SidebarReduser";
import UsersReduser, {MainUsersActionType} from "./UsersReduser";
import {AuthReduser, SetUserDataACType} from "./Auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {AppReduser, SetInitialisedACType} from "./AppReducer";


let redusers = combineReducers({
    profile: ProfileReduser,
    dialogs: DialogsReduser,
    sidebar: SidebarReduser,
    users: UsersReduser,
    auth: AuthReduser,
    form:formReducer,
    app:AppReduser
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = legacy_createStore(redusers, composeEnhancers (applyMiddleware(thunkMiddleware)))
export type AppActionsType = MainProfileActionType | MainDialogActionType | MainUsersActionType |
  SetUserDataACType | SetInitialisedACType
export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
// @ts-ignore

window.store = store

export default store
