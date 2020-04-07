import React from 'react';
import {InfoContext} from '../Info/Info';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
function ContactLink(){


    return (
        <div>

            <InfoContext.Consumer>
                {
                    (context) => {
                        return (
                            <div >

                                <div >
                                    <MailOutlineIcon />
                                    <h6 style={{marginLeft:'10px',display:"inline"}}>{context.info.email}</h6>
                                </div>
                                <div >
                                    <PhoneIcon />
                                    <h6 style={{marginLeft:'10px',display:"inline"}}>{context.info.tel}</h6>
                                </div>

                            </div>

                        )
                    }
                }


            </InfoContext.Consumer>

        </div>);

}


export default ContactLink;

