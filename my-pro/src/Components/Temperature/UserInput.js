import React from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class UserInput extends React.Component
{

    changeHandler = (event) =>
    {
        this.props.onInputChange(event.target.value)

    };
    clearHandler = () =>
    {

    }
    render()
    {
        let temperature = this.props.temperature;
        let scale = this.props.scale;
        return <div >
            <fieldest>
                <legend style={{ margin: '8px', color: 'grey' }}>
                    Enter temperature in {scaleNames[scale]}:</legend>
                <input autoFocus
                    value={temperature}
                    // onChange={this.props.onInputChange}
                    onChange={this.changeHandler}

                />

            </fieldest>

        </div>
    }
}

export default UserInput;

