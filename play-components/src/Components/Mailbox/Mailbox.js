import React from 'react';
import UnreadMsg from './UnreadMsg';
function Mailbox(props){
    const unreadMsg=['React...','Thank you!','Congratulations!'];
    return(
        <div>
            { unreadMsg.length?
            <UnreadMsg unreadMsg={unreadMsg}/>:<p>
            Clear To Do
        </p>}

        </div>
    );
}

export default Mailbox;
