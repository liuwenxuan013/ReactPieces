import React from 'react';
import MainContainer from './Components/MainContainter/MainContainer';
import Typography from "@material-ui/core/Typography";
//import { grey, indigo } from "@material-ui/core/colors";
import Nav from './Components/Nav/Nav';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
// import { ThemeContext, themes } from './Components/Theme/ThemeContext';
// import ThemeButton from './Components/Theme/ThemedButton';
// import ThemeToggleButton from './Components/Theme/ThemeToggleButton';
import CardsList from './Components/Cards/CardsList';
// import ToolBar from './Components/ToolBar/ToolBar';



class App extends React.Component
{
  render()
  {
    //let cardHead = this.state;

    return (

      //<MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Nav />
        <Container >
          <Typography style={{ padding: "5px 0" }}>
            <MainContainer />
          </Typography>
        </Container>
      </React.Fragment>
      //</MuiThemeProvider>
    );
  }

}



export default App;
