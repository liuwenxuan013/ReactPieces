import React from 'react';
import './App.css';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
class App extends React.Component
{
  render()
  {
    return (
      <div className="container">
        <Header />
        <Home />
        <Footer />

      </div>








    );
  }

}

export default App;
