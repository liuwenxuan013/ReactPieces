import React from 'react';

import MainContainer from './Components/MainContainter/MainContainer';
import Typography from "@material-ui/core/Typography";
import { grey, indigo } from "@material-ui/core/colors";
import Nav from '../Nav/Nav';

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";



class App extends React.Component
{
  render()
  {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#0d47a1"
        },
        secondary: {
          main: "#b71c1c"
        },
        type: "light"
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Nav />
          <Container >
            <Typography style={{ padding: "5px 0" }}>
              <MainContainer />
            </Typography>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }

}



export default App;
