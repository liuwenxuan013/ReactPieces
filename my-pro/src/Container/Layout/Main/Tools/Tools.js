import React from 'react';
import './Tools.css';
import Temperature from '../../../../Components/Temperature/Temperature';
import Mile from '../../../../Components/Mile/Mile';

class Tools extends React.Component
{
    state = { isClick: null }
    temperatureHandler = () =>
    {
        this.setState({ isClick: 'temperature' });
    }
    milesHandler = () =>
    {
        this.setState({ isClick: 'mile' });
    }
    render()
    {
        return <div className="Tools">
            <nav  >
                <ul>
                    <li><button onClick={this.milesHandler}>Miles</button></li>
                    <li><button onClick={this.temperatureHandler}>Temperature</button></li>

                    {/* <li><button onClick={this.milesHandler}>Miles</button></li> */}

                </ul>
            </nav>

            <section>



                {this.state.isClick === 'temperature' ? <Temperature /> : <Mile />}







            </section>

        </div>
    }
}
export default Tools;