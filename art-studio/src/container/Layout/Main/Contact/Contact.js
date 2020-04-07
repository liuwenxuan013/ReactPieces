import React from 'react';
import MyLinks from '../../../../components/MyLinks/MyLinks';
import ContactLink from "../../../../components/MyLinks/ContactLink";
import '../Main.css';
class Contact extends React.Component {
    render() {
        return <div className="contact">
            <div className="center">
                <ContactLink/>

                <MyLinks/>
            </div>



        </div>
    }
}
    export default Contact;

