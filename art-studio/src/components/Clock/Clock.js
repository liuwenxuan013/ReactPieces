import React from 'react';
//import ReactDOM from 'react-dom';
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
        return (
            <div>
                <h4 style={{textAlign:"center"}}>Time flies</h4>
                <p style={{textAlign:"center"}} > Time plays in my favor</p>
                <p style={{
                    textAlign: 'center',
                    padding: '0',
                    marginBottom: '0',



                }}> {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
export default Clock;

