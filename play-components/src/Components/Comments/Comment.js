import React from 'react';
function formatDate(data)
{return data.toLocaleString();}

function Comment (props){

  return  (
      <div>
          <div>  {props.name}</div>
          <div>  {props.text}</div>
          <div>  {formatDate(props.date)}</div>

      </div>



  )
}
export default Comment;







