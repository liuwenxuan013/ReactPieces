import React from 'react';

function Avatar(props){
    return(
         <img height={100}
    width={150}
    src={props.src}
    alt={props.name}/>
    );
}
export default Avatar;
