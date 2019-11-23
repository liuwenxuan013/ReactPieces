import React, { Component } from 'react';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
class Person extends Component
{
    constructor(props)
    {
        super(props);
        this.globalInputEleRef = React.createRef();
    }

    static getDerivedStateFormProps(props, state)
    {
        console.log('[Person.js] getDerivedStateFormProps', [props, state]);
        return state;
    }
    componentDidMount()
    {
        console.log('[Person.js] componentDidMount');
        this.globalInputEleRef.current.focus();
        //this.globalInputEleRef.focus();
        // document.querySelector('input').focus();//only can focus on the first input element,how to focus on the last one?
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('[Person.js] shouldComponentUpdate', [nextProps, nextState]);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('[Person.js] getSnapshotBeforeUpdate', [prevProps, prevState]);
        return 'the prevProps is: ' + prevProps + '& prevState is: ' + prevState;
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {

        console.log('[Person.js] componentDidUpdate', [prevProps, prevState, snapshot]);
        console.log(snapshot);
    }
    componentWillUnmount()
    {
        console.log('[Person.js] componentWillUnmount');
    }
    render()
    {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name}! and I'm {this.props.age} years old!
                     </p>
                <p> {this.props.children}</p>
                <input
                    // ref={(x) => { x.focus() }} not recommend
                    //ref={(inputElement) => { this.globalInputEleRef = inputElement }}
                    ref={this.globalInputEleRef}//using constructor
                    style={{ color: "blue" }}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />



            </Aux>




        );

    };
}
export default withClass(Person, classes.Person);