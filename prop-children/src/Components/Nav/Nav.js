import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import './Nav.scss';
//import useStyles from '../useStyles';
import Clock from '../Clock/Clock';

class Nav extends React.Component
{

    render()
    {
        // const classes = useStyles();

        return (
            <Paper
            // className={classes}
            >
                <Tabs
                    // value={value}
                    // onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Home" />
                    <Tab label="Projects" />


                    <Tab label="Clock"> <Clock /> </Tab>

                </Tabs>
            </Paper>
        );
    }
}
export default Nav;