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
            {/* <div class="form-group"> */}
            <label htmlFor={scaleNames[scale]}> </label>

            <input
                type="text"
                value={temperature}
                onChange={this.changeHandler}
                // class="form-control"
                placeholder={'Enter temperature in ' + scaleNames[scale]}
                name={scaleNames[scale]}
                style={{ width: "300px", margin: "10px 0" }} />

        </div>
        // </div>
    }
}

export default UserInput;

