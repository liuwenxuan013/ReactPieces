import React from 'react';

const Footer = (props) =>
{
    return (
        <div>
            <h1> {props.title} </h1>
            {props.children}
        </div>
    );




}
export default Footer;