import React from 'react';
//import data from '../data.js';
import Comment from './Comment';
import Avatar from "./Avatar";

function Users (){

    const users=[
        {
            id:'01',
            date:new Date(),
            text:'some text goes here...',
            author: {
                name: 'Superman',
                avatarUrl: 'http://pluspng.com/img-png/superman-hd-png--1491.png'}
        },
        {
            id:'02',
            date:new Date(),
            text:'some text goes here...',
            author: {
                name: 'Superman',
                avatarUrl: 'http://pluspng.com/img-png/superman-hd-png--1491.png'}
        }];


    return  users.map(user =>
            <div key={user.id}>
                <Avatar
                    src={user.author.avatarUrl}
                    name={user.author.name}
                />
                <Comment
                    date={user.date}
                    text={user.text}
                />

            </div>


        );



}
export default Users;







