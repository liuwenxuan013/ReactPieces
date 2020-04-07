import React from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../../../components/Info/Info';
import "../Main.css";

function Dashboard()
{
    return (<div className="main-right" >

            <InfoContext.Consumer>{
                (context) =>
                {
                    return <div>
                            <div className="card" >
                                <img className="card-img-top" src="./images/idphoto.jpg" alt=" ID Card" />
                                <div className="card-body">
                                    <h4 className="card-title">{context.info.name}</h4>
                                    <p className="card-text"> {context.info.title}</p>
                                    <Link to="/profile" className="card-text">See Profile</Link>
                                </div>
                            </div>
                        </div>

                }
            }
            </InfoContext.Consumer>

        </div>


    );
}
export default Dashboard;
