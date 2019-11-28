import React from 'react';
import './App.css';
import Layout from './Container/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

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
