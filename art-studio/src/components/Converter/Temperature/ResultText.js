import React from "react";


function ResultText(props)
{

    if (props.celsius >= 0 && props.celsius < 100)
        return <p style={{ color: 'pink' }} >The water would not boil </p>
    if (props.celsius >= 100)
        return <p style={{ color: '#2d5bb9' }}>The water would boil </p>
    return <p style={{textAlign:"center", color:"royalblue"}}> <small>~ Play to see ~  </small>  </p>


};
export default ResultText;
