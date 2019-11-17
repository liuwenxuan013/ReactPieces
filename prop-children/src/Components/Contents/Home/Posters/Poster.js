import React from 'react';
class Poster extends React.Component
{

    render()
    {
        if (this.props.doesShow)
            return (


                <div>
                    <p> {this.props.posterTitle}</p>
                    {this.props.children}
                    <img src={this.props.imgUrl} />


                    <input
                        type='text'
                        value={this.props.content}
                        onChange={this.props.changeContent}

                    />
                    <button
                        onClick={this.props.clickPoster}
                    >
                        hide
                </button>
                </div>);
        return (
            <div>

                <button
                    onClick={this.props.clickPoster}
                > + {this.props.posterTitle}</button>
            </div>
        );



    }
}
export default Poster;