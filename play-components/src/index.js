import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Components/Clock/Clock';
    ReactDOM.render(
        <Clock />,
        document.getElementById('time-stamp')
    );
 ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
