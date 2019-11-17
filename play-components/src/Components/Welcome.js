import React from 'react';
import App from "../App";
import ReactDOM from 'react-dom';


function Welcome (props){
const time=   <h1> time is : {new Date().toLocaleTimeString()}</h1>;


  return  (
      <div>
       { time}
        <p>Welcome to {props.name}'s home</p>

      </div>



  )
}
export default Welcome;







