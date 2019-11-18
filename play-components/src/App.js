
import React from 'react';
import Users from './Components/UserInfo/Users';
import './App.css';
import LoginControl from "./Components/Login/Login";
//import Greeting from "./Components/Greeting/Greeting";
//import TimeStamp from "./Components/TimeStamp/TimeStamp";



class App extends React.Component{

    render(){
        return (
            <div>
                <LoginControl />
                {/*<Users />*/}

            </div>);
    }

}

export default App;
