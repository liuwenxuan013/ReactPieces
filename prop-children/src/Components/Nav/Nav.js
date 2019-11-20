import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from '../useStyles';
import Clock from '../Clock/Clock';



class Nav extends React.Component() {

    render()
    {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) =>
        {
            setValue(newValue);
        };
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Home" />
                    <Tab label="Projects" />
                    <Tab label="Resume" />
                    <Tab label="Arts" />
                    <Tab label="Contact" />
                    <Tab label="Clock"> <Clock /> </Tab> />

                </Tabs>
            </Paper>
        );
    }
}
export default Nav;