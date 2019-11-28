import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Arts from './Arts/Arts';
import Tools from './Tools/Tools';
import Contact from './Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import { InfoContext, myInfo } from '../../../Components/Info/Info';
import Clock from '../../../Components/Clock/Clock';
class Main extends React.Component
{

    render()
    {
        return (
            <div className="Main">


                <InfoContext.Provider value={{ info: myInfo }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/arts" component={Arts} />
                        <Route path="/tools" component={Tools} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </InfoContext.Provider>
                <Clock />

            </div >

        );

    }


}
export default Main;