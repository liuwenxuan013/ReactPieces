import React, { Component }  from 'react';

import ClassComponents from './components/Component/Components'
import CreateClassApp from './components/Component/CreateClassApp'


import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Hello~</h1>
        </header>
       <body>
       <ClassComponents> </ClassComponents>
       <CreateClassApp></CreateClassApp>


       </body>

      </div>
  );
  }

}

export default App;
