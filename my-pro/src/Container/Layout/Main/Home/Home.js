import React from 'react';
import { InfoContext } from '../../../../Components/Info/Info';
import { Link } from 'react-router-dom';
import './Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import ContactsIcon from '@material-ui/icons/Contacts';

const iconStyle = {
    color: '#ffffff',
    margin: '0 8px',
}

class Home extends React.Component
{
    render()
    {
        return (
            <div className="Home">
                <InfoContext.Consumer>
                    {(context) =>
                    {

                        return <div>
                            <p style={{ marginTop: '20%' }}>Hello, I'm</p>
                            <h1> {context.info.name} </h1>
                            <p style={{
                                marginLeft: '80px',
                                fontSize: '1em',
                            }}> {context.info.title} </p>
                            <div style={{ marginLeft: '80px' }}>
                                <a href="https://www.linkedin.com/in/wenxuan-liu-a77011158/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon style={iconStyle} />
                                </a>
                                <a href="https://github.com/liuwenxuan013" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon style={iconStyle} />
                                </a>
                                <Link to="/contact"><ContactsIcon style={iconStyle} /></Link>

                            </div>

                        </div>


                    }




                    }
                </InfoContext.Consumer>

            </div >
        );

    }


}
export default Home;