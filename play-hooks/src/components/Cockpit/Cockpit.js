import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';


function Cockpit(props)
{
    // useEffect(() =>
    // {
    //     console.log('[Cockpit.js] useEffect');
    //     const timer = setTimeout(() => { alert('persons component changed!!') }, 1000);
    //     return () =>
    //     {
    //         clearTimeout(timer);
    //         console.log('[Cockpit.js] cleaning work in [this.props.persons] useEffect');
    //     }
    // }, [props.persons]);

    useEffect(() =>
    {
        console.log('[Cockpit.js] 2nd useEffect');
        setTimeout(() => { alert('empty array as condition of firing useEffect!') }, 1000);
        return () =>
        {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleaning work in [] useEffect');
        }
    });

    // useEffect(() =>
    // {
    //     console.log('[Cockpit.js] 3nd useEffect');
    //     const timer = setTimeout(() => { alert('run all the time!') }, 1000);
    //     return () =>
    //     {
    //         clearTimeout(timer);
    //         console.log('[Cockpit.js] cleaning all the time with each render');
    //     }
    // });

    console.log('[Cockpit.js]  rendering...');
    let assignedClass = [];
    let btnClass = '';
    if (props.showPersons)
    {
        btnClass = classes.Red;// red button for person show
    }

    if (props.personsLength <= 2)
    {
        assignedClass.push(classes.red); //classes = ['red']
    }
    if (props.personsLength <= 1)
    {
        assignedClass.push(classes.bold);//classes=['red','bold']
    }

    return (

        <div className={classes.Cockpit}>

            <h1>{props.title}</h1>
            <p className={assignedClass.join(' ')}> This is really work!!!</p>

            <button
                className={btnClass}
                onClick={props.clickToggle}

            > Toggle Persons</button>
        </div >
    );

}

export default React.memo(Cockpit);