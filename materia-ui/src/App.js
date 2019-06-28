import React from 'react';

import NavBar from './components/NavBar'
import CoursesList from './components/CoursesList'


class App extends React.Component {
  render(){
    return (
        <div>
          <NavBar />
          <CoursesList />
        </div>
    )
  }
}



export default App;
