import React from 'react';
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
};

class UserInput extends React.Component{

    changeHandler=(event)=>{
        this.props.onInputChange(event.target.value)

    };
    render(){
        let temperature=this.props.temperature;
        let scale=this.props.scale;
        return <div>
            <fieldest>
                <legend>
                    Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.changeHandler}
                />
            </fieldest>
        </div>
    }
}

export default UserInput;

