import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let arreyDialogs = [
    {name: 'Dimych', id: 1},
    {name: 'Andrey', id: 2},
    {name: 'Sveta', id: 3},
    {name: 'Valera', id: 4},
    {name: 'Sasha', id: 5},
]
let arreyMessages = [
    {message: 'Hi', id: 1},
    {message: 'Hello', id: 2},
    {message: 'Yo', id: 3},
    {message: 'How are you?', id: 4},
]
let arreyPost = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 10},
    {id: 3, message: 'Hi, how are you?', likesCount: 2},
    {id: 4, message: 'Hi, how a?', likesCount: 2},
]

ReactDOM.render(<App dialogs = {arreyDialogs} messages = {arreyMessages} post = {arreyPost} />, document.getElementById('root'));