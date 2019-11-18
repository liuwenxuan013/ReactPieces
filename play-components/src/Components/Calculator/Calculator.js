import React from 'react';
import UserInput from './UserInput';
import ResultText from "./ResultText";
function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}

function tryConvert(temp,convert){
    const input=parseFloat(temp);
    if(Number.isNaN(input)){return '';}
    const output=convert(input);
    const rounded=Math.round(output*100)/100;
    return rounded.toString();
}


class Calculator extends React.Component{
    state={
        temperature:'',
        scale:'c'
    };
    celsiusChangeHandler=(temperature)=>{
        this.setState({scale:'c',temperature});
    };
    fahrenheitChangeHandler=(temperature)=>{
        this.setState({scale:'f',temperature});
    };
    render(){
        const temperature=this.state.temperature;
        const scale=this.state.scale;
        const celsius=scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?tryConvert(temperature, toFahrenheit):temperature;

        return <div>
            <UserInput scale='c'
                       temperature={celsius}
                       onInputChange={this.celsiusChangeHandler}/>
            <UserInput scale='f'
                       temperature={fahrenheit}
                       onInputChange={this.fahrenheitChangeHandler}/>
            <ResultText  celsius={parseFloat(celsius)} />

            </div>
    }
}

export default Calculator;

