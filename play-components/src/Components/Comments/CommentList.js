import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{
    state={ showNotice : false};
    clickToggleHandler=()=>{
        this.setState(state=>({showNotice:!state.showNotice}));
    };

    render(){
        return <div >

                <button onClick={this.clickToggleHandler}>
                    {this.state.showNotice? '^' : '>'}
                </button>
            <div>  {this.state.showNotice? <Comment/>:null}</div>
                <input type='text' value='please comments'/>
            </div>



    }

}
export default CommentList;







