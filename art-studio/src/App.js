import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './container/Layout/Layout';

function App()
{
  return (
    <BrowserRouter>
      <div >

        <Layout />

      </div>
    </BrowserRouter>

  );
}

export default App;
