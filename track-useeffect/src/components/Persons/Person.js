import React from 'react';
function Person(props)
{
    return (
        <div>
            <p onClick={props.clickDelete}>
                I'm {props.name}, I'm {props.age} years old!</p>
            <input type="text" value={props.name} onChange={props.changeName} />
        </div>

    );
}
export default Person;