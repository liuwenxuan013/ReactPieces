import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import posterStyle from './Poster.css';

class Poster extends React.Component
{
    render()
    
        {
            if (this.props.doesShow)
                return (
                    <div className={posterStyle.Poster}>
                        <Card >
                            <CardActionArea>
                                {/* <CardMedia
                                    className={Poster}
                                    image={this.props.imgUrl}
                                    title={this.props.posterTitle}
                                /> */}

                                
                                <img src={this.props.imgUrl}
                                    alt='img'
                                    height="260" width="300"
                                     //className={posterStyle.img}
                                />
                            <p>{this.props.posterTitle}</p>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <p> {this.props.posterTitle}</p>
                                        {this.props.children}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <input
                                            type='text'
                                            value={this.props.content}
                                            onChange={this.props.changeContent}

                                        />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small"
                                    color="primary"
                                    onClick={this.props.clickPoster}
                                > Hide</Button>
                                <Button size="small" color="primary">Share</Button>
                            </CardActions>
                        </Card>
                    </div>);
            return (
                <div>
                    <Button size="small" color="primary"
                        onClick={this.props.clickPoster}>
                        + {this.props.posterTitle}
                    </Button>
                </div>
            );

        }
    }



export default Poster;