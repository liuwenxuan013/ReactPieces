
import React from 'react';
import Mailbox from "../Mailbox/Mailbox";
import Notification from "../Notice/Notification";
import CommentList from "../Comments/CommentList";
import Terms from "../Terms/Terms";
function UserGreeting(props){
    return <h3>Welcome Back</h3>;
}
function GuestGreeting(props){
    return <h3>Please Sign up</h3>;
}
function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <div>
            <UserGreeting/>     <br/><br/><br/><hr/>

            <Mailbox />      <br/><br/><br/><hr/>
            <Notification/>   <br/><br/><br/><hr/>
            <CommentList />    <br/><br/><br/><hr/>
            <Terms />   <br/><br/><br/><hr/>


            </div>;}

        return <GuestGreeting/>;

}
export default Greeting;
