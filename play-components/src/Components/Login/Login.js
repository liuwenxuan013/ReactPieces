import React from 'react';
import Greeting from '../Greeting/Greeting';
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

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
   }
   export default LoginControl;
