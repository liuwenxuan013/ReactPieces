import React from "react";

function ResultText(props)
{
    if (props.km >= 0 && props.km < 120)
        return <p>Good Driving! </p>
    if (props.km >= 120)
        return <p style={{ color: 'red' }}>Over Speed </p>
    return <p></p>
}

export default ResultText;
