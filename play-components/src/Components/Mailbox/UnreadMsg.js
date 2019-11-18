

import React from 'react';
function UnreadMsg(props){
    const unreadMsg=props.unreadMsg;
    return(
        <div>
            <h1>Hello!</h1>
            {unreadMsg.length >0 &&
            <h2>You have {unreadMsg.length} unread messages. </h2> }
        </div>
    );
}

export default UnreadMsg;
