
import React, { useState, useEffect } from 'react';

function Dislike(props)
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
            style={{ color: "#d9d9d9" }}
            onClick={() =>
            {
                setCount(count -1);

            }}

        > <small style={{ color: "gray" }}>  {count-1} </small>   </i>

    );

}
export default Dislike;
