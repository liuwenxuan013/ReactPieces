import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{
    state={ showNotice : false,
        newComment:'',


    };
    clickToggleHandler=()=>{
        this.setState(state=>({showNotice:!state.showNotice}));
    };
    clickCommentHandler=(event)=>{
        this.setState({newComment:event.target.value});
    };

    submitHandler=(event)=>{
        alert('your submit is :'+this.state.value);
        event.preventDefault();
    };
    render(){
        return <div >

                <button onClick={this.clickToggleHandler}>
                    {this.state.showNotice? '^' : '>'}
                </button>
            <div>  {this.state.showNotice? <Comment/>:null}</div>
            <form onSubmit={this.submitHandler}>
                <label>
                    Give your comment:
                    <input type='text' value={this.state.value} onChange={this.clickCommentHandler}/>
                </label>
                <input type="submit" value="Submit" />
            </form>

            </div>



    }

}
export default CommentList;







