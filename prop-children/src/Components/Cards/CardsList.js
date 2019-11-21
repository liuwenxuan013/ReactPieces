
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';
import React from "react";

export default function CardsList()
{
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>

                    <Cards />


                </Grid>
                <Grid item xs={4}>
                    <Cards />
                </Grid>
                <Grid item xs={4}>
                    <Cards />
                </Grid>
            </Grid>
        </div>
    );
}
