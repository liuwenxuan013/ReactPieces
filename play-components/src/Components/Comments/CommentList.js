import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{
    state={ showNotice : false,
        newCommentTitle:'',
        newComment:'',
        newCommentSelect:'public',


    };
    clickToggleHandler=()=>{
        this.setState(state=>({showNotice:!state.showNotice}));
    };
    changeCommentHandler=(event)=>{
        this.setState({newComment:event.target.value});
    };
    changeTitleHandler=(event)=>{
        this.setState({newCommentTitle:event.target.value.toUpperCase()});
    };
    changSelectHandler=(event)=>{
        this.setState({newCommentSelect:event.target.value});
    };

    submitHandler=(event)=>{
        alert('Your comment submitted '+
            this.state.newCommentSelect +'ly \n'+
            'Title: '+ this.state.newCommentTitle+
            '\nContent: '+this.state.newComment);
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
                    Give your comment a title:
                    <input type='text' value={this.state.value} onChange={this.changeTitleHandler}/>
                </label>
                <label>
                    comment here:
                    <textarea value={this.state.value} onChange={this.changeCommentHandler}/>
                </label>
                <label>
                   how do you like your comment?
                    <select value={this.state.value} onChange={this.changSelectHandler}>
                        <option value= "public"> Public </option>
                        <option value= "private"> Private </option>
                    </select>
                </label>


                <input type="submit" value="Submit" />
                <input type="submit" value="Cancel" />

            </form>

            </div>



    }

}
export default CommentList;







