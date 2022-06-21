import {combineReducers, createStore} from "redux";
import ProfileReduser from "./ProfileReduser";
import DialogsReduser from "./DialogsReduser";
import SidebarReduser from "./SidebarReduser";
export type stateType = ReturnType<typeof store.getState>
let redusers:any = combineReducers({
    profile:ProfileReduser,
    dialogs:DialogsReduser,
    sidebar:SidebarReduser
})
let store = createStore(redusers)

export default store
