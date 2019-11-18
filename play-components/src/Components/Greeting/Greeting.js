
import React from 'react';
import Mailbox from "../Mailbox/Mailbox";
import Notification from "../Notice/Notification";
import CommentList from "../Comments/CommentList";
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
            <UserGreeting/>
            <Mailbox />
            <Notification/>
            <CommentList />

            </div>;}

        return <GuestGreeting/>;

}
export default Greeting;
