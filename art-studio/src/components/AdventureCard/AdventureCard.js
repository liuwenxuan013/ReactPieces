import React from 'react';
import { InfoContext} from '../Info/Info';

class AdventureCard extends React.Component
{
    state = {
        title: this.props.title,
    };
    render()
    {
        let title = this.state.title;
        let album = [];
        return <InfoContext.Consumer>{
            (context) =>
            {
                // if (x === "us") album = [...context.info.adventureImg.us];
                // if (x === "canada") album = [...context.info.adventureImg.canada];
                switch (title)
                {
                    case "us":
                        album = [...context.info.adventureImg.us];
                        break;
                    case "canada":
                        album = [...context.info.adventureImg.canada];
                        break;
                    case "china":
                        album = [...context.info.adventureImg.china];
                        break;
                    case "france":
                        album = context.info.adventureImg.france;
                        break;
                    case "switzerland":
                        album = context.info.adventureImg.switzerland;
                        break;
                    case "germany":
                        album = context.info.adventureImg.germany;
                        break;
                    case "austria":
                        album = context.info.adventureImg.austria;
                        break;
                    case "italy":
                        album = context.info.adventureImg.italy;
                        break;
                    default:
                        album = [...context.info.adventureImg.us];
                }


                return <div>

                    <div id={title} className="carousel slide" data-ride="carousel"

                    >
                        <ul className="carousel-indicators">
                            {album.forEach((e, index) =>
                            {

                                return <li data-target={title}
                                    data-slide-to={index}
                                    className="active"></li>

                            })}
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={album[6].imgUrl}
                                    alt={album[6].title}
                                    width="250"
                                    height="200" />
                                <div className="carousel-caption" style={{color:'white',fontWeight:"bold"}}>
                                    <h5>{album[6].title}</h5>
                                    <p>{album[6].desc}|{album.time}</p>
                                </div>
                            </div>
                            {album.map((e, index) =>
                            {

                                return <div key={index} className="carousel-item" >
                                    <img src={e.imgUrl}
                                        alt={e.title}
                                        width="250"
                                        height="200" />
                                    <div className="carousel-caption" style={{color:'white',fontWeight:"bold"}}>
                                        <h5>{e.title}</h5>
                                        <p>{e.desc}|{e.time}</p>
                                    </div>
                                </div>

                            })}
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={'#' + title} data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href={'#' + title} data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>

            }
        }


        </InfoContext.Consumer >

    }

}
export default AdventureCard;
