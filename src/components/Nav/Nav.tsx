import React from "react";
import clAss from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Friends, {FriendsType} from "./Friends/Friends";
import {DataDialogType} from "../../App";


function NavBar(props:DataDialogType) {
    return(
        <div className={clAss.nav}>
        <li className={clAss.item}>
            <NavLink to='/Profile' activeClassName={clAss.activeLink}>Profile</NavLink>
        </li>
        <li className={clAss.item}>
            <NavLink to ='/Dialogs' activeClassName={clAss.activeLink}>Messages</NavLink>
        </li>
            <li className={clAss.item}>
            <NavLink to='/News' activeClassName={clAss.activeLink}>News</NavLink>
        </li>
        <li className={clAss.item}>
            <NavLink to='/Music' activeClassName={clAss.activeLink}>Music</NavLink>
        </li>
        <li className={clAss.item}>
            <NavLink to='/Settings' activeClassName={clAss.activeLink}>Settings</NavLink>
        </li>
            <Friends friends={props.friends} />
    </div>
)}

export default NavBar;