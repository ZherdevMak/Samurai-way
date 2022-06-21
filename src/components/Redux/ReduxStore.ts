import {combineReducers, createStore} from "redux";
import ProfileReduser from "./ProfileReduser";
import DialogsReduser from "./DialogsReduser";
import SidebarReduser from "./SidebarReduser";

let redusers:any = combineReducers({
    profile:ProfileReduser,
    dialogs:DialogsReduser,
    sidebar:SidebarReduser
})
let store:any = createStore(redusers)

export default store
