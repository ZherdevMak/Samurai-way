import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import stl from './users.module.css'
import axios from 'axios';
import userAvatar from '../../assets/images/avatar.jpg'

const Users = (props: UsersPropsType) => {
    let getUsers = () => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=> {
            props.setUsers(response.data.items)
        })
    }}
return <div>
    <button onClick={getUsers}>Get Users</button>
    {props.users.map(el => {
        return <div key={v1()}>
                <span>
                    <div>
                        <img className ={stl.userPhoto } src={ el.photos.small !== null ? el.photos.small : userAvatar} alt=""/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
        </div>
    })}
</div>

}
;

export default Users;