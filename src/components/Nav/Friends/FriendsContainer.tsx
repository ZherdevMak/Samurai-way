import React from 'react';
import Friends from "./Friends";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";

const FriendsContainer = () => {
    let state = useSelector<AppStateType,any>(state=>state.sidebar)

    return <Friends friends={state} />
};

export default FriendsContainer;