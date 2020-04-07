import React from 'react';
import UserInput from './UserInput';
import ResultText from "./ResultText";

function toKm(mile)
{
    return mile * 1.61;
}
function toMile(km)
{
    return km / 1.61;
}

function tryConvert(speed, convert)
{
    const input = parseFloat(speed);
    if (Number.isNaN(input)) { return ''; }
    const output = convert(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
}


class Mile extends React.Component
{
    state = {
        speed: '',
        scale: 'k',
        isClear: false,
    };
    kmChangeHandler = (speed) =>
    {
        this.setState({ scale: 'k', speed });
    };
    mileChangeHandler = (speed) =>
    {
        this.setState({ scale: 'm', speed });
    };
    clearHandler = () =>
    {
        this.setState({ isClear: true });
        this.setState({ speed: '' });

    };
    render()
    {
        const speed = this.state.speed;
        const scale = this.state.scale;
        const km = scale === 'm' ? tryConvert(speed, toKm) : speed;
        const mile = scale === 'k' ? tryConvert(speed, toMile) : speed;

        return <div>

            <UserInput scale='k'
                speed={km}
                // onInputChange={(event)=>this.celsiusChangeHandler(event.target.value)}
                onInputChange={this.kmChangeHandler}
            />
            <UserInput scale='m'
                speed={mile}
                onInputChange={this.mileChangeHandler}
            //onInputChange={(event)=>this.fahrenheitChangeHandler(event.target.value)}
            />
            <button type="reset"
                    className="btn text-dark border-secondary"
                    style={{padding:"0 10px",margin:"10px 0"}}
                onClick={this.clearHandler}


            >Reset</button>

            <ResultText km={parseFloat(km)} />

        </div>
    }
}

export default Mile;

