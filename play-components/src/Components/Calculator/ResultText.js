import React from "react";

function ResultText(props ) {
    if(props.celsius>=100){
        return <p>the water would boil </p>
    }
    return  <p>the water would not boil </p>
};
export default ResultText;
