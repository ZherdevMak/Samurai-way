import React from "react";
import clAss from './Nav.module.css'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

export type NavBarProps = {
    store: any
}

function NavBar(props: NavBarProps) {

    return (
        <div className={clAss.nav}>
            <li className={clAss.item}>
                <NavLink to='/Profile' activeClassName={clAss.activeLink}>Profile</NavLink>
            </li>
            <li className={clAss.item}>
                <NavLink to='/Dialogs' activeClassName={clAss.activeLink}>Messages</NavLink>
            </li>
            <li className={clAss.item}>
                <NavLink to='/Users' activeClassName={clAss.activeLink}>Users</NavLink>
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
            <FriendsContainer store={props.store}/>
        </div>
    )
}

export default NavBar;