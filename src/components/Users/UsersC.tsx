import React from 'react';
import {v1} from "uuid";
import stl from "./users.module.css";
import userAvatar from "../../assets/images/avatar.jpg";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";


class Users extends React.Component<UsersPropsType> {

        componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
    })
    }

    render() {
        return <div>

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