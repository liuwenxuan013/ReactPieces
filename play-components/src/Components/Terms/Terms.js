
import React from "react";


class Terms extends React.Component{
    state={
        terms:'You can input after 5 mins',
    };

    render(){
        let terms=this.state.terms;
         let timer= setTimeout(()=>{
            this.setState({terms:null});
        },5000);
        // let clearTimer=clearTimeout(timer);
            return <div>
                    <textarea value={this.state.terms} />
                         <p hidden> {timer}</p>
                         {!terms?
                             <div>
                                 <button > Agree</button>
                                 <button > Disagree </button>
                             </div>  :
                             <div>
                                 <button disabled> Agree</button>
                                 <button disabled> Disagree </button>
                             </div>
                         }
                    </div>;
    }

}

export default Terms;
