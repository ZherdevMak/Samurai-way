import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import stl from './users.module.css'


const Users = (props: UsersPropsType) => {

    return <div>
        {props.users.users.map( el => {return <div key={v1()}>
                <span>
                    <div>
                        <img className={stl.userPhoto} src={el.photoUrl} alt=""/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={()=> {props.unfollow(el.id)}}>Unfollow</button>
                            : <button onClick={()=> {props.follow(el.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </span>
                </span>
                </div>})}
        </div>

};

export default Users;