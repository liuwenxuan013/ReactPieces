
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';

import React from "react";
import { CardInfo } from '../CardContext ';


class CardsList extends React.Component
{
    state = {
        card: CardInfo
    }

    render()
    {

        return <Grid container spacing={2}>

            {this.state.card.map(c =>
            {
                return <Grid item xs={4}> <Cards
                    avatarUrl={c.avatarUrl}
                    title={c.title}
                    content={c.content}
                /> </Grid>
            })}

        </Grid>;

    }

}
// CardsList.contextType = CardContext;
export default CardsList;