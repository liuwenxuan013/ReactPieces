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
            <fieldest>
                <legend style={{ margin: '10px', color: 'grey' }}>
                    Enter speed in {scaleNames[scale]}:</legend>
                <input autoFocus
                    value={speed}
                    // onChange={this.props.onInputChange}
                    onChange={this.changeHandler}

                />
            </fieldest>
        </div>
    }
}

export default UserInput;

