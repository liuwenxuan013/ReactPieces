import React from "react";

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
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Typography from '@material-ui/core/Typography';
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
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        aria-label="show more"
                    >
                        {/* <ExpandMoreIcon /> */}
                    </IconButton>
                </CardActions>
                <Collapse>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>

                    </CardContent>
                </Collapse>
            </Card>
        );

    }
}

export default Cards;
