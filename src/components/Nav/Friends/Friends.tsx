import React from 'react';
import {v1} from "uuid";
import {DataDialogType} from "../../../App";
import stl from './Friends.module.css'

export type FriendsType = {
    id: number,
    avatar: string,
    name: string
}
const Friends = (props: DataDialogType) => {
    return (
        <div className={stl.mainWrapper}>
            <h2 className={stl.title}>Friends</h2>
            <div className={stl.wrapper}>
                {props.friends?.map((f) => {
                    return (
                        <div key={v1()}>
                            <img className={stl.friendsAvatar} src={f.avatar}/>
                            <div className={stl.friendsName}>{f.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
        ;
};

export default Friends;