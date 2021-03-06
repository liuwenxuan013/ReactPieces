import React from 'react';
//import classes from './App.module.css';
import Cockpit from './components/Cockpit/Cockpit';
import Persons from './components/Persons/Persons';
import './App.css';

class App extends React.Component
{

  state = {
    persons: [
      { id: '01', name: 'one', age: '10' },
      { id: '02', name: 'two', age: '20' },
      { id: '03', name: 'three', age: '30' },

    ],
    doesShow: false,

  }

  ToggleHandler = () =>
  {
    const show = this.state.doesShow;
    this.setState = ({ doesShow: !show });

  }
  personDeleteHandler = (id) =>
  {
    const index = this.state.persons.findIndex(p =>
    {
      return p.id === id;
    })
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }
  changeNameHandler = (e, id) =>
  {
    const index = this.state.persons.findIndex(p =>
    {
      return p.id === id;
    })
    const persons = [...this.state.persons];
    const changedPerson = { ...this.state.persons[index] };
    changedPerson.name = e.target.value;
    persons[index] = changedPerson;
    this.setState({ persons: persons });
  }
  render()
  {
    return (
      <div className="App" >
        <Cockpit
          show={this.state.doesShow}
          title={this.props.title}
          clickToggle={this.ToggleHandler}
        />

        {this.state.doesShow ?
          <Persons
            persons={this.state.persons}
            clickDelete={this.personDeleteHandler}
            changeName={this.changeNameHandler}
          /> : null}
      </div >
    );
  }

}

export default App;
