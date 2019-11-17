import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Home from './Components/Contents/Home/Home';

import 'typeface-roboto';




class App extends React.Component
{

  render()
  {
    return (

      <div>
        <Header title={this.props.appTitle}>
          @Wenxuan
          </Header>



        <Nav />
        <Home />
        <Footer />

      </div>








    );
  }

}

export default App;
