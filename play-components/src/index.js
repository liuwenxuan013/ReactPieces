import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 import Clock from './Components/Clock/Clock';

//
// function tick(){
//     const element=(
//         <div>
//
//             <h1>it is {new Date().toLocaleTimeString()}</h1>
//         </div>
//     );
//     ReactDOM.render(element,document.getElementById('time-stamp'));
// }
// setInterval(tick,1000);
ReactDOM.render(<App />, document.getElementById('root'));


function tick(){
    ReactDOM.render(
        // eslint-disable-next-line react/jsx-no-undef
        <Clock date={new Date()}/>,
        document.getElementById('time-stamp')
    );
}
setInterval(tick,1000);
serviceWorker.unregister();
