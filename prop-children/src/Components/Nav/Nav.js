import React from 'react';
import './Nav.scss';
import Clock from '../Clock/Clock';
export default function Nav()
{
    return (
        <div >
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#feature">Features</a></li>
                <li><a href="#movies">Movies</a></li>
                <li><a href="#music">Music</a></li>

                <Clock />
            </ul>

        </div>
    );
}