
import React  from 'react';
import Liked from "./Liked";
import Dislike from "./Dislike";
class  Favorite extends React.Component
{
    state={
        count:Math.floor(Math.random() * 100),
        isLike:false};


    clickHandler=()=>{
        this.setState({isLike:!this.state.isLike})
    };
    render(){ return (

        <button onClick={this.clickHandler}
        style={{border:"none",width:"49px"}}

        >
            {this.state.isLike? <Liked count={this.state.count}/>:<Dislike count={this.state.count}/>}
        </button>

    );}


}
export default Favorite;
