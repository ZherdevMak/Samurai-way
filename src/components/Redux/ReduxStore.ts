import {combineReducers, createStore} from "redux";
import ProfileReduser from "./ProfileReduser";
import DialogsReduser from "./DialogsReduser";
import SidebarReduser from "./SidebarReduser";
import UsersReduser from "./UsersReduser";
export type stateType = ReturnType<typeof store.getState>
let redusers = combineReducers({
    profile:ProfileReduser,
    dialogs:DialogsReduser,
    sidebar:SidebarReduser,
    users:UsersReduser
})
let store = createStore(redusers)
export type AppStateType = ReturnType<typeof redusers>
export default store
