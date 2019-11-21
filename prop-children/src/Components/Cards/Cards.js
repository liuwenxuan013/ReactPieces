import React from "react";
import Link from '@material-ui/core/Link';
//import useStyles from '../useStyles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CardContext, CardInfo } from '../CardContext ';
// class CardHeaderComponent extends React.Component
// {
//     render()
//     {
//         const user = this.props.user;
//         return (


//             <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//         );
//     }
// }

class Cards extends React.Component
{
    // state = { user: this.context }
    handleFavorite = (e) =>
    {

    }
    render()
    {

        return (
            <Card
            // className= {classes.card}
            >

                < CardHeader
                    avatar={

                        <Avatar
                            aria-label={this.props.title}
                            alt={this.props.title}
                            src={this.props.avatarUrl}
                        >

                        </Avatar>
                    }
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={this.props.title}

                />


                <CardMedia
                    // className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="carMedia title"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.content}
                        This show is the Card content inside of the content inside of CardContent/Typography
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                </CardActions>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography >more about {this.props.title} </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <Link href={this.props.srcUrl}>
                                {this.props.title} link
                            </Link>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>


            </Card >
        );

    }
}

export default Cards;
