import React from 'react';
import UnreadMsg from './UnreadMsg';
import ReadMsg from "./ReadMsg";
class Mailbox extends React.Component{
    state={
        unreadMsg: [
            {id:'01', date:'2019-11-13',sender:'Tim',text:'hi,laura'},
            {id:'02', date:'2019-11-17',sender:'Mom',text:'Congratulations!'},
            {id:'03', date:'2019-11-11',sender:'Alisa',text:'Thank you!'}
            ],

        showNotice: false,

    };

    clickToggleHandler=()=>{
        this.setState(state=>({showNotice:!state.showNotice}));
    };

    render(){
        return(
    <div>
        { this.state.unreadMsg.length?
            <div>
                <UnreadMsg unreadMsg={this.state.unreadMsg}/>
                <button onClick={this.clickToggleHandler}>
                    {this.state.showNotice? 'Hide':'Show'}
                </button>
                {this.state.showNotice ?
                    <div>
                     <ReadMsg unreadMsg={this.state.unreadMsg}/>
                    </div>

                    :null

                }
            </div>
            :<p>Clear To Do </p>}

    </div>
);}

}

export default Mailbox;
