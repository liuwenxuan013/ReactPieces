import React from 'react';
function NoticeList(){
    const notices =[
        {id:'01', title:'Career',date:'2019-11-13',sender:'LinkedIn'},
        {id:'02', title:'Family',date:'2019-11-17',sender:'Mom'},
        {id:'03', title:'Meeting',date:'2019-11-11',sender:'Alisa'},
    ];


   return notices.map(n=>{
       return <div key={n.id}>
           <p>{n.title} - {n.date} from {n.sender}</p>



       </div>
   });
}
export default NoticeList;




