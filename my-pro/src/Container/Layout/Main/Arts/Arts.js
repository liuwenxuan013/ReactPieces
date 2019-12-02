import React from 'react';
import './Arts.css';
import { InfoContext } from '../../../../Components/Info/Info';


class Arts extends React.Component
{
    render()
    {
        return (
            <div className="Arts">
                <h1><i>"    The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.    "</i></h1>
                <p> <i>-  Albert Einstein</i></p>
                <p>Time plays in my favor...</p>

                <InfoContext.Consumer>
                    {(context) =>
                    {
                        return (
                            <div>{context.info.arts.map(a =>
                            {

                                return <div key={a.imgUrl}>
                                    <div className="responsive">
                                        <div className="gallery">
                                            <a target="_blank"
                                                rel="noopener noreferrer"
                                                href={a.imgUrl}>
                                                <img src={a.imgUrl}
                                                    alt={a.desc}
                                                    width="200"
                                                    height="180" />

                                            </a>
                                            <div className="desc">
                                                {a.desc}|{a.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                            </div>
                        )
                    }}
                </InfoContext.Consumer>
            </div>
        );

    }


}
export default Arts;