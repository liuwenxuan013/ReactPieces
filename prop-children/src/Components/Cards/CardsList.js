
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';
import React from "react";
import UserContext from '../UserContext ';

class CardsList extends React.Component
{



    render()
    {

        return <Grid container spacing={2}>
            <Grid item xs={4}>
                <Cards title='Ln' project='LinkedIn' />
            </Grid>
            <Grid item xs={4}>
                <Cards title='WL' project='Resume' />
            </Grid>
            <Grid item xs={4}>
                <Cards title='GH' project='GitHub' />
            </Grid>
        </Grid>;

    }

}
//CardsList.contextType = UserContext;
export default CardsList;