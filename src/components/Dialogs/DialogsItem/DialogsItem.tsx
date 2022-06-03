import React from "react";
import comp from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type itemProps = {
    'name': string;
    'id': number;
}
type messageProps = {
    'message': string
}

function Item(props: itemProps) {
    return (
        <div key={v1()} className={comp.item + ' ' + comp.active}>
            <NavLink to={'/Dialogs/1' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default Item;