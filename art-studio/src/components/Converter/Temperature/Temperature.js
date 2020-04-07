import React from 'react';
import UserInput from './UserInput';
import ResultText from "./ResultText";

function toCelsius(fahrenheit)
{
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius)
{
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temp, convert)
{
    const input = parseFloat(temp);
    if (Number.isNaN(input)) { return ''; }
    const output = convert(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
}


class Temperature extends React.Component
{
    state = {
        temperature: '',
        scale: 'c',
        isClear: false
    }

    celsiusChangeHandler = (temperature) =>
    {
        this.setState({ scale: 'c', temperature });
    };
    fahrenheitChangeHandler = (temperature) =>
    {
        this.setState({ scale: 'f', temperature });

    };
    clearHandler = () =>
    {
        this.setState({ isClear: true });
        this.setState({ temperature: '' });

    };
    render()
    {
        const temperature = this.state.temperature;

        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return <div className="Temperature">




            <UserInput scale='c'
                temperature={celsius}
                // onInputChange={(event)=>this.celsiusChangeHandler(event.target.value)}
                onInputChange={this.celsiusChangeHandler}

            />
            <UserInput scale='f'
                temperature={fahrenheit}
                onInputChange={this.fahrenheitChangeHandler}

            //onInputChange={(event)=>this.fahrenheitChangeHandler(event.target.value)}
            />
            <button type="reset"
                    className="btn text-dark border-secondary"
                    style={{padding:"0 10px",margin:"10px 0"}}

                onClick={this.clearHandler}

            >Reset</button>

            <ResultText celsius={parseFloat(celsius)} />

        </div>


    }
}
export default Temperature;

