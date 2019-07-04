import React from 'react';
import QueryString from 'query-string';
import './App.css'
//import {Card, CardActions, CardContent,List,ListItem,Button,Typography,Input} from '@material-ui/core';
import PubNub from 'pubnub';
import {useState,useEffect} from 'react';
import useInput from './useInput.js'
export default function App(){
let defaultChannel="Global";
let query=window.location.search;
console.log(query);
let  params = QueryString.parse(query);
for(let pair in params)
  if (pair.channel && pair.channel !== '')
    defaultChannel = pair.channel;
  let [a, b] = [2, 3];
  const [channel,setChannel] = useState(defaultChannel);
  const [messages,setMessges]=useState([]);
  const [username,]=useState(['user',new Date().getTime()].join('-'));
  //let [tempChannel,setTempChannel,onChangeTempChannel]=useInput();
  const tempMessage=useInput();
  tempMessage.setValue(1);


  useEffect(()=>{
    //
  },[channel,username])
  const pubnub=new PubNub({
    publishKey: 'pub-c-5f1cdca6-80b8-496e-95c2-574abf0ce066',
    subscribeKey: 'sub-c-d16d7f38-9b41-11e9-ab0f-d62d90a110cf',
    uuid: username
  });
  pubnub.addListener({
    status:function(statusEvent){
      if(statusEvent.category==="PNConnectedCategory"){
        console.log("Connected to PunNub!");
      }
    },
    message:function(msg){
      if(msg.message.text){
        let newMessages=[];
        newMessages.push({
          uuid:msg.message.uuid,
          text:msg.message.text
        });
        setMessges(messages=>messages.concat(newMessages))
      }
    }
  });
  pubnub.subscribe({
    channels:[channel]
  });
  pubnub.history({
    channel:channel,
    count:10,
    stringifiedTimeToken:true
  },function(status,response){
    let newMessages=[];
    for(let i=0;i<response.messages.length;i++){
      newMessages.push({
        uuid:response.messages[i].entry.uuid,
        text:response.messages[i].entry.text
      });
    }
    setMessges(messages=>messages.concat(newMessages))
  });
  return function cleanup(){
    pubnub.unsubscribeAll();
    setMessges([]);
  }
}


function Log(props){

}

function Message(props){}





