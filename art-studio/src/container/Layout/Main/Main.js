import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Features from './Features/Features';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import { InfoContext, myInfo } from '../../../components/Info/Info';
import './Main.css';
import '../Layout.css';


function Main()
{
    return (
        <div className="main">


            <InfoContext.Provider value={{ info: myInfo }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/features" component={Features} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </InfoContext.Provider >



        </div >

    );
}
export default Main;
