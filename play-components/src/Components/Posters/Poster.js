import React from 'react';
import posterStyle from './Poster.css';
class Poster extends React.Component
{
    render()
    
        {
            if (this.props.doesShow)
                return (
                    <div className={posterStyle.Poster}> 
                        <img src={this.props.imgUrl}
                            alt='img'
                            height="260" width="300"
                        />
                        <p>{this.props.posterTitle}</p>
                        <p> {this.props.posterTitle}</p>
                            {this.props.children}
                        <input
                            type='text'
                            value={this.props.content}
                            onChange={this.props.changeContent}
                        />
                        <button onClick={this.props.clickPoster}> Hide </button>
                        <button >Share</button>
                    </div>);
            return (
                <div>
                    <button
                        className={posterStyle.button}
                        onClick={this.props.clickPoster}>
                        + {this.props.posterTitle}
                    </button>
                </div>
            );

        }
    }
export default Poster;