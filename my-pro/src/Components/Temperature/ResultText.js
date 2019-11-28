import React from "react";


function ResultText(props)
{

    if (props.celsius >= 0 && props.celsius < 100)
        return <p  >The water would not boil </p>
    if (props.celsius >= 100)
        return <p style={{ color: '#2d5bb9' }}>The water would boil </p>
    return <p></p>


};
export default ResultText;
