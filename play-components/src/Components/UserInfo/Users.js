import React from 'react';
//import data from '../data.js';
import Comment from '../Comments/Comment';
import Avatar from "./Avatar";

function Users (){

    const users=[
        {
            id:'01',
            date:new Date(),

            author: {
                name: 'Superman',
                avatarUrl: 'http://pluspng.com/img-png/superman-hd-png--1491.png'}
        },
        {
            id:'02',
            date:new Date(),

            author: {
                name: 'Spider man',
                avatarUrl: 'http://pluspng.com/img-png/superman-hd-png--1491.png'}
        }];


    return  users.map(user =>
            <div key={user.id}>
                <Avatar
                    src={user.author.avatarUrl}
                    name={user.author.name}
                />
                {user.author.name}



            </div>


        );



}
export default Users;







