import React from 'react';
import './SplitPane.css'

function SplitPane(props){
    return <div className="SplitPane">
        <div className="SplitPane-left">
            {props.left}
        </div>
        <div className="SplitPane-right">
            {props.right}
        </div>
    </div>;

}
export default SplitPane;
