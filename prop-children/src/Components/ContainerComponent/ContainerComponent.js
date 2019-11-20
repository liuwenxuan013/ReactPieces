import React from "react";

import Typography from "@material-ui/core/Typography";
import { grey, indigo } from "@material-ui/core/colors";

import CardsList from '../Cards/CardsList';
import Nav from '../Nav/Nav';
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

export default function ContainerComponent()
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
    console.log(theme);
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <Nav />
                <Container >
                    <Typography style={{ padding: "5px 0" }}>
                        <CardsList />
                    </Typography>
                </Container>
            </React.Fragment>
        </MuiThemeProvider>
    );
}
