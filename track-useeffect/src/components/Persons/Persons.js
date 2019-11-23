import React from 'react';
import Person from './Person';
function Persons(props)
{


    return props.persons.map(person =>
    {
        return (
            <Person
                id={person.id}
                key={person.id}
                name={person.name}
                age={person.age}
                changeName={(e) => props.changeName(e, person.id)}
                clickDelete={() => props.clickDelete(person.id)}
            />
        );
    })
}
export default Persons;
