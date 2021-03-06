import React, { useEffect } from 'react';
function Cockpit(props)
{
    useEffect(() =>
    {
        console.log('[Cockpit.js]  empty array useEffect');
        setTimeout(() =>
        {
            alert('some thing...');
        }, 1000);
        return () =>
        {
            console.log('[Cockpit.js]  clean up empty array useEffect ');
        }
    }, []);

    return (
        <div>
            <p> {props.title} </p>
            <button
                show={props.show}
                onClick={props.clickToggle}
            >Toggle to {props.show ? 'Hide' : 'Show'}Persons </button>
        </div>
    );
}
export default Cockpit;