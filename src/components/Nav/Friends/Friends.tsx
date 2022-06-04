import React from 'react';
import {v1} from "uuid";
import {DataDialogType} from "../../../App";
export type FriendsType = {
    id:number,
    avatar: string,
    name:string
}
const Friends = (props: DataDialogType) => {
    return (
        <div>
            <h2>Friends</h2>
            {props.friends?.map((f) => {
                return(
                <div key={v1()}>
                    <img src={f.avatar} />
                    <div>{f.name}</div>
                </div>
            )
            })}
        </div>
    );
};

export default Friends;