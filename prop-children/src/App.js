import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Home from './Components/Contents/Home/Home';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import 'typeface-roboto';

function Copyright()
{
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Wenxuan Liu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
class App extends React.Component
{

  render()
  {
    return (
      <createMuiTheme>
        <div>

          <Header title={this.props.appTitle}>

            <p>@Wenxuan</p>
          </Header>

          <Nav />
          <Home />

        </div>

      </createMuiTheme>





    );
  }

}

export default App;
