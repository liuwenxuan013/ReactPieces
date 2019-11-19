
import React from 'react';
import Mailbox from "../Mailbox/Mailbox";
import Notification from "../Notice/Notification";
import CommentList from "../Comments/CommentList";
import Terms from "../Terms/Terms";
import Calculator from "../Calculator/Calculator";
import FancyBorder from "../FancyBorder/FancyBorder";
import '../FancyBorder/FancyBorder.css';
import SplitPane from "../SplitPane/SplitPane";
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
            <Calculator /> <br/><br/><br/><hr/>
            <FancyBorder color="lightblue">
                <h3 className="Dialog-title">Welcome</h3>
                <p className="Dialog-message">thank you for visiting my website </p>
            </FancyBorder>
            <br/><br/><br/><hr/>

            < SplitPane
                left={<Terms/>}
                right={<Calculator/>}
                />




            </div>;}

        return <GuestGreeting/>;

}
export default Greeting;
