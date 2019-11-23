import React from 'react';
import classes from './App.module.css';

import './App.css';

function Cockpit(props)
{

  return (
    <div>
      <p> {props.title} </p>
      <button
        doesShow={props.doesShow}
        onClick={props.clickToggle}
      >Toggle to Show Persons </button>
    </div>
  );
}
function Persons()
{


  return this.persons.map(person =>
  {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changeName={props.changeName}
        clickDelete={prop.clickDelete}
      />
    );
  })
}

function Person()
{
  return (
    <div>
      <p onClick={props.clickDelete}>
        I'm {props.name}, I'm {props.age} years old!</p>
      <input type="text" value={props.name} onChange={props.changeName} />
    </div>

  );
}
function App(props)
{
  state = {
    persons: [
      { id: '01', name: 'one', age: '10' },
      { id: '02', name: 'two', age: '20' },
      { id: '03', name: 'three', age: '30' },

    ],
    doesShow: false,

  }
  return (
    <div className="App">
      <Cockpit
        doesShow={this.state.doesShow}
        title={props.title}
        clickToggle={this.ToggleHandler}
      />
      {this.state.doesShow ?
        <Persons
          persons={this.state.person}
          clickDelete={this.personDeleteHandler}
          changeName={this.changeNameHandler}
        /> : null}
    </div>
  );
}

export default App;
