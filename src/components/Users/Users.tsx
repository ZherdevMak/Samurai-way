import React from 'react';
import {v1} from "uuid";
import stl from "./users.module.css";
import userAvatar from "../../assets/images/avatar.jpg";
import {UsersStateType} from "../Redux/UsersReduser";
type UserPropsType1 = {
    users: Array<UsersStateType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number
    onPageChanged:(el:number)=>void
    follow:(userID:string)=>void
    unfollow:(userID:string)=>void
}

const Users = (props:UserPropsType1) => {
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
                        <img className={stl.userPhoto} src={el.photos.small !== null ? el.photos.small : userAvatar}
                             alt=""/>
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
    )
}


export default Users;