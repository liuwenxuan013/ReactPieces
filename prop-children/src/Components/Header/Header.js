import React from 'react';

import AppBar from '@material-ui/core/AppBar';


import Clock from '../Contents/Clock/Clock';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const Header = (props) =>
{

    return (
        <AppBar position="static">
            <Toolbar>


                <Typography variant="h6" >
                    {props.title}{props.children}
                    <Clock />

                </Typography>

            </Toolbar>
        </AppBar>

    );




}
export default Header;