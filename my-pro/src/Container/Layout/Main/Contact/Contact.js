import React from 'react';
import './Contact.css';
import { InfoContext } from '../../../../Components/Info/Info';
class Contact extends React.Component
{

    render()
    {
        return (
            <div className="Contact">
                <InfoContext.Consumer>
                    {(context) =>
                    {
                        return <div style={{ marginTop: '30%' }} >
                            <h5 >Phone:<p>{context.info.tel}</p></h5>
                            <h5>Email:<a href="mailto:liuwenxuan013@gmail.com" target="_top">{context.info.email}</a></h5>

                        </div>
                    }}

                </InfoContext.Consumer>
            </div>
        );

    }


}
export default Contact;