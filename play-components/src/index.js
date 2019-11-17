import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Components/Clock/Clock';

function tick(){
    ReactDOM.render(

        <Clock date={new Date()}/>,
        document.getElementById('time-stamp')
    );

}

setInterval(tick,1000);
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
