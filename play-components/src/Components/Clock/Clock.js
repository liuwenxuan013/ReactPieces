import React from 'react';
//import ReactDOM from 'react-dom';
class Clock extends React.Component{
    render(){
        return(

            <div>

                <h1>it is {this.props.date.toLocaleTimeString()}</h1>
            </div>
        );
    }

}




export default Clock;

