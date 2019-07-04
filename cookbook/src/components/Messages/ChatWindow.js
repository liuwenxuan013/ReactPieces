import React from 'react';
import PropTypes from 'prop-types';
class ChatWindow extends React.Component{
    static contextType={
        userMap:PropTypes.object,
    };
}
