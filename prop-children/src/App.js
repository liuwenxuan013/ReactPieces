import React from 'react';
import MainContainer from './Components/MainContainter/MainContainer';
import Typography from "@material-ui/core/Typography";
//import { grey, indigo } from "@material-ui/core/colors";
import Nav from './Components/Nav/Nav';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { ThemeContext, themes } from './Components/Theme/ThemeContext';
import ThemeButton from './Components/Theme/ThemedButton';
import ThemeToggleButton from './Components/Theme/ThemeToggleButton';
import CardsList from './Components/Cards/CardsList';
import ToolBar from './Components/ToolBar/ToolBar';
import Home from './Components/Home/Home';
import Cards from './Components/Cards/Cards';


function Content()
{
  return (
    <div> <ThemeToggleButton /></div>
  );
}
function Page(props)
{

  const content =
    <MainContainer>
      <Home>
        <CardsList>
          <Cards user="L"> </Cards>

        </CardsList>
      </Home>
    </MainContainer>;
  const topBar = <Nav> </Nav>;
  return (
    <div>

      topBar = {
        topBar
      }
      content={content}
    </div>


  );


}
class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.toggleTheme = () =>
    {
      this.setState(state => ({
        theme:
          state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }
  render()
  {
    // {
    //   const theme = createMuiTheme({
    //     palette: {
    //       primary: {
    //         main: "#0d47a1"
    //       },
    //       secondary: {
    //         main: "#b71c1c"
    //       },
    //       type: "light"
    //     }
    //   });
    return (

      <Page>
        <ThemeContext.Provider value={this.state}>
          <ToolBar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemeButton />
        </div>
      </Page>


      // <MuiThemeProvider theme={theme}>
      // <React.Fragment>
      //   <CssBaseline />
      //   <Nav />



      //   <Container >
      //     <Typography style={{ padding: "5px 0" }}>
      //       <MainContainer />
      //     </Typography>
      //   </Container>
      // </React.Fragment>
      // </MuiThemeProvider>
    );
  }

}



export default App;
