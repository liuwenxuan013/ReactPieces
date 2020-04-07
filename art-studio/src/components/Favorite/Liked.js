
import React, { useState, useEffect } from 'react';
function Liked(props)
{
    const [count, setCount] = useState(props.count);

    useEffect(() =>
        {
            document.getElementsByClassName('fas fa-heart').count = '$count';
        }
    );


    return (

        <i
            className="fas fa-heart "
            style={{ color: "#ff4d4d" }}
            onClick={() =>
            {
                setCount(count + 1);

            }}

        > <small    style={{ color: "gray" }}>  {count} </small>  </i>

    );

}
export default Liked;
