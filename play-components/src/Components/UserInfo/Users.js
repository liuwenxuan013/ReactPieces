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
                avatarUrl: 'https://vignette.wikia.nocookie.net/marveldatabase/images/9/92/Peter_Parker_%28Earth-30847%29_from_Marvel_vs._Capcom_Infinite_0001.png/revision/latest?cb=20170922195944'}
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







