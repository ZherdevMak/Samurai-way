import React from 'react';
import {NavBarProps} from "../Nav";
import Friends from "./Friends";
import {StateType} from "../../Redux/State";

const FriendsContainer = (props: NavBarProps) => {
    let state: StateType = props.store.getState()

    return <Friends friends={state.sidebar} />
};

export default FriendsContainer;