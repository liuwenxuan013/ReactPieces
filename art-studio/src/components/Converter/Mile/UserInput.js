import React from 'react';
const scaleNames = {
    k: 'Km/h',
    m: 'Miles/h'
};

class UserInput extends React.Component
{

    changeHandler = (event) =>
    {
        this.props.onInputChange(event.target.value)

    };
    render()
    {
        let speed = this.props.speed;
        let scale = this.props.scale;
        return <div>
            <label htmlFor = {scaleNames[scale]}> </label>

            <input
                type="text"
                // class="form-control"
                placeholder={'Enter speed in ' + scaleNames[scale]}
                name={scaleNames[scale]}
                style={{ width: "300px", margin: "10px 0" }}
                value={speed}
                // onChange={this.props.onInputChange}
                onChange={this.changeHandler} />
        </div>



    }
}

export default UserInput;

