import React from "react";
import clAss from './Nav.module.css'



function NavBar() {
    return (<nav className={clAss.nav}>
        <li className={clAss.item}>
            <a>Profile</a>
        </li>
        <li className={`${clAss.item} ${clAss.active}`}>
            <a>Messages</a>
        </li>
        <li className={clAss.item}>
            <a>News</a>
        </li>
        <li className={clAss.item}>
            <a>Music</a>
        </li>
        <li className={clAss.item}>
            <a>Settings</a>
        </li>
    </nav>)
}
export default NavBar;