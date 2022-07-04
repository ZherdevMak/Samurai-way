import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import stl from './users.module.css'
import axios from 'axios';
import userAvatar from '../../assets/images/avatar.jpg'


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (el:number) =>{
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items)

        })
    }

    render() {

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(el => {

                    return <span key={v1()} className={(this.props.currentPage === el) ? stl.selected : ''}
                    onClick = {()=>{this.onPageChanged(el)}}>{` ${el} `}</span>
                    })}
            </div>
            {this.props.users.map(el => {
                return <div key={v1()}>
                <span>
                    <div>
                        <img className={stl.userPhoto} src={el.photos.small !== null ? el.photos.small : userAvatar}
                             alt=""/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
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
}


export default Users;