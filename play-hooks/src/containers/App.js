import React from 'react';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.module.css';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor...');
  }
  state = {
    persons: [
      { id: '01', name: 'Laura', age: 28 },
      { id: '02', name: 'Tim', age: 18 },
      { id: '03', name: 'Alisa', age: 20 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFormProps(props, state)
  {
    console.log('[App.js] getDerivedStateFormProps]', [props, state]);
    return state;
  }
  // componentWillMount()
  // {
  //   console.log('[App.js] componentWillMount');
  // }
  componentDidMount()
  {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[App.js] shouldComponentUpdate', [nextProps, nextState]);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log('[App.js] getSnapshotBeforeUpdate', [prevProps, prevState]);
    return 'the prevProps is: ' + prevProps + '& prevState is: ' + prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    console.log('[App.js] componentDidUpdate', [prevProps, prevState, snapshot]);
    return snapshot;
  }

  componentWillUnmount()
  {
    console.log('[App.js] componentWillUnmount');
  }


  deletePersonHandler = (personIndex) =>
  {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }
  togglePersonHandler = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  changeNameHandler = (event, id) =>
  {
    const personIndex = this.state.persons.findIndex(p =>
    {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;
    this.setState((prevState, props) =>
    {
      return {
        persons: newPersons,
        changeCounter: prevState.changeCounter + 1
      };

    });
  }
  loginHandler = () =>
  {
    const isAuth = this.state.authenticated;
    this.setState({ authenticated: !isAuth });
  }
  render()
  {
    console.log('[App.js] rendering...');
    let persons = null;
    if (this.state.showPersons)
      persons =
        <Persons
          persons={this.state.persons}
          clickDelete={this.deletePersonHandler}
          changeName={this.changeNameHandler}
        />

    return (
      <Aux >
        <button
          onClick={() =>
          {
            this.setState({ showCockpit: false });
          }}>
          Remove Cockpit
            </button>
        <button
          onClick={this.addClickHandler}
        > +
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clickToggle={this.togglePersonHandler}
              showCockpit={this.state.showCockpit}
              login={this.loginHandler}
            /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );

  };

};

export default withClass(App, classes.App);
