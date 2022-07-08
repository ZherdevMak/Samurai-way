import {combineReducers,legacy_createStore} from "redux";
import ProfileReduser from "./ProfileReduser";
import DialogsReduser from "./DialogsReduser";
import SidebarReduser from "./SidebarReduser";
import UsersReduser from "./UsersReduser";
import {AuthReduser} from "./Auth-reducer";
export type stateType = ReturnType<typeof store.getState>
let redusers = combineReducers({
    profile:ProfileReduser,
    dialogs:DialogsReduser,
    sidebar:SidebarReduser,
    users:UsersReduser,
    auth:AuthReduser
})
let store = legacy_createStore(redusers)
// @ts-ignore
window.store = store
export type AppStateType = ReturnType<typeof redusers>
export default store
