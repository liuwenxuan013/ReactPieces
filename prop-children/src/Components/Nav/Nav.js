import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Nav = (props) =>
{
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit'>

                        <a href="#"> Home </a>
                        <a href="#"> LinkedIn </a>
                        <a href="#"> Github </a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>



    );





}
export default Nav;