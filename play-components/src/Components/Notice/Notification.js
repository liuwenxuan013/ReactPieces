import React from 'react';
import './Notification.css'
import NoticeList from "./NoticeList";


class Notification extends React.Component{

state={showNotice:true};
clickToggleHandler=()=>{
        this.setState(state=>({showNotice:!state.showNotice}));
    };



    render(){
        const showNotice=this.state.showNotice;
        return(
            <div className ="notice" >
                {showNotice?
                    <div>
                        <NoticeList/>
                        <button onClick={this.clickToggleHandler}>
                            {this.state.showNotice? 'Hide':'Notification'}
                        </button>
                    </div>
                    :  <button onClick={this.clickToggleHandler}>
                        {this.state.showNotice? 'Hide':'Notification'}
                    </button>
                }

            </div>
        );
    }
}
export default Notification;
