import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{
    state={ showNotice : false,
        newCommentTitle:'',
        newComment:'',
        newCommentSelect:'public',
        newCommentInterest:['music','movie'],
        isGoing:true,
        numberOfGuests:1,

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
    multipleSelectHandler=(event)=>{
        let selected=this.state.newCommentInterest;
        if(selected!==event.target.value)
        {   selected =[];
            selected.push(event.target.value);
        }

        this.setState({newCommentInterest:selected});
    };
    changeInputHandler=(event)=>{
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value,
        })

    };
    submitHandler=(event)=>{
        alert('Your comment submitted '+
            this.state.newCommentSelect +'ly \n'+
            'Title: '+ this.state.newCommentTitle+
            '\nContent: '+this.state.newComment+
            '\nInterest: '+this.state.newCommentInterest


        );
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
                    <input type='text' value={this.state.newCommentTitle} onChange={this.changeTitleHandler}/>
                </label>
                <label>
                    comment here:
                    <textarea value={this.state.newComment} onChange={this.changeCommentHandler}/>
                </label>
                <br/><br/><br/>
                <label>
                   how do you like your comment?
                    <select value={this.state.newCommentSelect} onChange={this.changSelectHandler}>
                        <option value= "public"> Public </option>
                        <option value= "private"> Private </option>
                    </select>
                </label>
                <br/><br/><br/>
                <label>
                    What are you interested in?
                    <select multiple={true} value={this.state.newCommentInterest} onChange={this.multipleSelectHandler}>
                        <option value= "movie"> Movie </option>
                        <option value= "music"> Music </option>
                        <option value= "travel"> Travel </option>
                        <option value= "photography"> Photography </option>

                    </select>
                </label>
{/*<input type= "file"/>*/}

                <input type="submit" value="Submit" />
                <input type="submit" value="Cancel" />

            </form>
            <br/><br/><br/><hr/>

            <form onSubmit={this.submitHandler}>
                <label>
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.changeInputHandler}
                        />
                </label><br/>
                <label>
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.changeInputHandler}
                    />
                </label>
            </form>
            <br/><br/><br/><hr/>

            </div>



    }

}
export default CommentList;







