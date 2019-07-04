import React,{Component} from'react';
import PropTypes from 'prop-types';


class Messages extends React.Component{
    static propTypes={
        users:PropTypes.array.isRequired,
        initialActiveChatIdx:PropTypes.number,
        messages:PropTypes.array.isRequired,
    };
    static childContextTypes={
        users:PropTypes.array,
        userMap:PropTypes.object,
    };
    getChildContext(){
        return{
            users:this.getUsers(),
            userMap:this.getUserMap(),
        };
    }
    render(){
        return(
            <div>
                <ThreadList />
                <ChatWindow />
            </div>
        )
    }
}
