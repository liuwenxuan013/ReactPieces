import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom' ;
import Movie from './Movie';
import Music from './Music';


const routing=(
    <Router>
        <div>
            <Router path="/" component={App}/>
            <Route path="/Movie" component={Movie}/>
            <Route path="/Music" component={Music}/>
        </div>
    </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
