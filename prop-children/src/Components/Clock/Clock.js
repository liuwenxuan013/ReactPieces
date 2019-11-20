import React from 'react';
class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount()
    {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }
    tick()
    {
        this.setState({
            date: new Date()
        });
    }
    render()
    {
        const style = {
            display: 'block',
            color: '#f0f0f5',
            textAlign: 'right',
            padding: '18px 12px ',
            backgroundColor: '#2A293E',
            margin: 0,


        }

        return (

            <div style={style}>
                <h1 style={{
                    fontFamily: 'sans-serif',
                    fontSize: '14px',
                }}
                >{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}
export default Clock;

