import React from 'react';
function formatDate(data)
{return data.toLocaleString();}

function Comment (){
const commentDate=formatDate(new Date());
const comment=['Give you first comment!', 'Fine, second!'];
  return  comment.map((c,index)=>{
      return <div key={index}>
                  <div>  {c}</div>
                  <div>  {commentDate}</div>
            </div>
  });}

export default Comment;







