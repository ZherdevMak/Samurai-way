import React from 'react';
import {v1} from "uuid";
import stl from "./users.module.css";
import userAvatar from "../../assets/images/avatar.jpg";
import {UsersStateType} from "../Redux/UsersReduser";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UserPropsType1 = {
    users: Array<UsersStateType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (el: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    ToggleFollowing:(isFollowing:boolean,userID: string) => void
    isFollowing:string[]
}

const Users = (props: UserPropsType1) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(el => {

                    return <span key={v1()} className={(props.currentPage === el) ? stl.selected : ''}
                                 onClick={() => {
                                     props.onPageChanged(el)
                                 }}>{` ${el} `}</span>
                })}
            </div>
            {props.users.map(el => {
                return <div key={v1()}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                        <img className={stl.userPhoto} src={el.photos.small !== null ? el.photos.small : userAvatar}
                             alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.isFollowing.some(id => id === el.id)} onClick={() => {
                                props.ToggleFollowing(true,el.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                    {
                                        withCredentials: true,
                                        headers:{
                                            'API-KEY': 'd5319fd7-c99a-40ac-b17e-87174e69eee7'
                                        }

                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(el.id)
                                        }
                                        props.ToggleFollowing(false,el.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.isFollowing.some(id => id === el.id)} onClick={() => {
                                props.ToggleFollowing(true,el.id)

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                    {}, {withCredentials: true,
                                        headers:{
                                            'API-KEY': 'd5319fd7-c99a-40ac-b17e-87174e69eee7'
                                        }
                                    })
                                    .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                        props.ToggleFollowing(false,el.id)
                                })

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
    )
}


export default Users;