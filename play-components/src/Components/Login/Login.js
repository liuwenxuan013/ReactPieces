import React from 'react';
import SignUpGreeting from '../Greeting/SignUpGreeting';
import GuestGreeting from "../Greeting/GuestGreeting";
function LoginButton(props){
    return(
        <button onClick={props.onClick}> Login </button>
    );
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>);
    }
    class  LoginControl extends React.Component{

        state={isLoggedIn:false};

       clickLogoutHandler=()=>{
        this.setState({isLoggedIn:false});
       };

       clickLoginHandler=()=>{
           this.setState({isLoggedIn:true});
       };

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button = isLoggedIn?  <LogoutButton onClick={this.clickLogoutHandler} />:
        <LoginButton onClick={this.clickLoginHandler} />;
        let greeting=isLoggedIn?  <SignUpGreeting />: <GuestGreeting />;

        return(
            <div>
                {greeting}
                {button}
            </div>
        );
    }
   }
   export default LoginControl;
