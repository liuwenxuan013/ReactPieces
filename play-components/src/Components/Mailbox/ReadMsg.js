import React from 'react';
function ReadMsg(props){
    return props.unreadMsg.map(n=>{
        return <div key={n.id}>
            <p>{n.text} - {n.date} from {n.sender}</p>
        </div>
    });
}

export default ReadMsg;
