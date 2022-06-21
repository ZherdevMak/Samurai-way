import React from 'react';
import {v1} from "uuid";
import stl from './Friends.module.css'
import {NavBarProps} from "../Nav";
import Friends from "./Friends";

export type FriendsType = {
    id: number,
    avatar: string,
    name: string
}
const FriendsContainer = (props: NavBarProps) => {
    let state = props.store.getState()

    return <Friends friends={state.sidebar} />

};

export default FriendsContainer;