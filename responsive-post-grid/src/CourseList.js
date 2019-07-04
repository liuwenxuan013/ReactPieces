import React,{Component} from 'react';
import {Grid, TextField,} from '@material-ui/core/'
import * as c from 'contentful';
import Course from './Course';

const space ='';
const accessToken='';
const client=c.createClient({
    space,
    accessToken
});


class CourseList extends Component{

    constructor(){
        super();
        this.getCourses();
        this.state={
            courses:[],
            searchString:''
        }
    }

    getCourses=()=>{
        client.getEntries({
            content_type:'course',
            query:this.state.searchString
        })
            .then((res)=>{
                this.setState({courses:res.items})
            })
            .catch((err)=>console.error(err));
    }
    onSearchInputChange=(e)=>{
        if(e.target.value)
        {this.setState({searchString:e.target.value})}
        else        {this.setState({searchString:''})}
        this.getCourses();
    }

    render(){
        return(
            <div>
                {

                }
            </div>
        )
    }

}
