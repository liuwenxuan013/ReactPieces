
import React from 'react';
import '../FancyBorder/FancyBorder.css';





function Greeting(props){
    return(
        <div>
            <h2> {props.title}</h2>
            <h3>{props.message}</h3>
            {props.children}
        </div>
    )
    //const isLoggedIn=props.isLoggedIn;
    // const greeting=isLoggedIn?
    //     <SignUpGreeting
    //
    //
    //     />
    //     :
    //     <GuestGreeting/>;
    // return(
    // {greeting}
    // );

    // if(isLoggedIn){
    //     return <div>
    //         <UserGreeting/>     <br/><br/><br/><hr/>
    //
    //         <Mailbox />      <br/><br/><br/><hr/>
    //         <Notification/>   <br/><br/><br/><hr/>
    //         <CommentList />    <br/><br/><br/><hr/>
    //         <Terms />   <br/><br/><br/><hr/>
    //         <Calculator /> <br/><br/><br/><hr/>
    //         <FancyBorder color="lightblue">
    //             <h3 className="Dialog-title">Welcome</h3>
    //             <p className="Dialog-message">thank you for visiting my website </p>
    //         </FancyBorder>
    //         <br/><br/><br/><hr/>
    //
    //         < SplitPane
    //             left={<Terms/>}
    //             right={<Calculator/>}
    //             />
    //
    //         </div>;}
    //
    //     return <GuestGreeting/>;

}
export default Greeting;
