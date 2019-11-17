import React from 'react';

const Header = (props) =>
{
    return (
        <div>
            <h1> {props.title} </h1>
            {props.children}
        </div>
    );




}
export default Header;