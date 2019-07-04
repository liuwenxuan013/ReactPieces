import React from 'react';
import PropTypes from 'prop-types';
class ChatMessage extends React.Component{
    static contextType={
        UserMap:PropTypes.object,
    };



}
export default ChatMessage
