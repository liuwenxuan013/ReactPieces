import React from 'react';
import { InfoContext } from '../../../../components/Info/Info';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import $ from 'jquery';
import MyLinks from "../../../../components/MyLinks/MyLinks";
import ContactLink from "../../../../components/MyLinks/ContactLink";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import 'bootstrap';
import OtherLinks from "../../../../components/MyLinks/OtherLinks";
import '../Main.css';
$('#addSupModal').modal('show');

class Profile extends React.Component
{


    componentDidMount() {
        $(document).ready(function () {
            $('.toast').toast('show');
            $('[data-toggle="tooltip"]').tooltip();
        });
    };


    render(){

    return (
        <div className="profile" >
            <InfoContext.Consumer>
                {(context) => {

                    return (
                        <div className="card ">
                            <div id="accordionInfo" >
                                <div className="card " style={{padding:"40px"}}>
                                    <div className="row">
                                    <div  className="row-left"  >
                                    <h1>{context.info.name}
                                    </h1>
                                        <a href="./images/Laura Liu-Cover Letter.pdf"
                                           download="Thank you"
                                           data-toggle="tooltip"
                                           title="Read me!"
                                            style={{color:'white',marginBottom:"20px"}}>
                                            <Chip
                                                style={{marginBottom:"20px"}}
                                                size="small"
                                                icon={<FaceIcon />}
                                                label="A letter for you"
                                                clickable
                                                color="primary"
                                                onDelete={()=>{}}
                                                deleteIcon={<CloudDownloadIcon/>}
                                                variant="outlined"/>
                                        </a>
                                    <h6> {context.info.title}  </h6>
                                        <div style={{fontSize:"12px"}}>
                                    <ContactLink/>
                                    <p>Toronro,ON</p>
                                        </div>
                                        <div className="row" >
                                            <div  className="row-left " >
                                                <MyLinks />
                                            </div>
                                            <div className="row-right" > <OtherLinks /> </div>
                                        </div>
                                    <br/>
                                </div>
                                <div className="row-right" >
                                    <div className="toast" data-autohide="false" style={{backgroundColor:"lightGrey"}}>
                                        <div className="toast-header">
                                            <strong className="mr-auto text-secondary">Hello</strong>
                                            <small className="text-muted">Dismiss</small>
                                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                                        </div>
                                        <div className="toast-body" >
                                            <p>Please download my   <a href="./images/Laura Liu-Resume.pdf" download="Laura Liu - Resume">
                                                resume  <CloudDownloadIcon/>
                                            </a>  and help it
                                            find a HR, I am looking forward to a Web
                                                developer job opportunity in Toronto...</p>
                                            <p>Thank you </p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card s-pro">
                            <div  id="accordionSummary" >
                                    <div className="card s-pro" >
                                        <a className="card-link" data-toggle="collapse" href="#collapseSummary">
                                            <h4 >EXECUTIVE SUMMARY</h4>
                                        </a>
                                        {context.info.summary.map((s,index)=>{
                                            return <p key={index}>{s.desc}</p>
                                        })}
                                    </div>
                            </div>

                            <div id="accordionExperience" >
                                    <div className="card s-pro" >
                                        <a className="card-link " data-toggle="collapse" href="#collapseExperience" >
                                            <h4 >PROFESSIONAL EXPERIENCE</h4>
                                        </a>
                                         {context.info.workExperience.map((e,index) => {
                                                return (
                                                        <div key={index}>
                                                            <h5 >{e.company}</h5>
                                                            <h6>{e.jobTitle}</h6>
                                                            <p>{e.start} To {e.end}</p>
                                                            <p>{e.description.overall}</p>
                                                            <div id="collapseExperience" className="collapse show" data-parent="#accordionExperience">
                                                                <div className="card-body">
                                                                    {e.description.responsibilities.map((e,index) => {
                                                                        return <div key={index}>
                                                                            <p> {e.desc} </p>
                                                                        </div>
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )})
                                         }
                                </div>
                            </div>
                            <div id="accordionEducation" >
                                <div className="card s-pro" >
                                    <a className="card-link" data-toggle="collapse" href="#collapseEducation">
                                        <h4 >EDUCATION</h4>
                                    </a>
                                    {context.info.education.map(e => {
                                        return (
                                            <div  key={e.school}>
                                                    <h5 >{e.school}</h5>
                                                    <h6>{e.degree} - {e.major}</h6>
                                                    <p>{e.start} To {e.end} | {e.city},{e.country}</p>
                                                    <div id="collapseEducation" className="collapse show" data-parent="#accordionEducation">
                                                        <div className="card-body"  >
                                                            {e.awards.map((a,index)=>{
                                                                return  <div key={index} className="card" style={{width: " 180px", height:"150px", float: "left"}}>
                                                                                <img className="card-img-top" src={a.imgUrl}
                                                                                     alt={a.title} style={{width: "100%" ,height:"83%"}}/>
                                                                                <div className="card-body" style={{margin:0,padding:0,float: "left"}}>
                                                                                    <p className="card-text" style={{textAlign:"center",fontSize:"10px" ,margin:0,padding:0}}>{a.title}</p>
                                                                                </div>
                                                                        </div>})
                                                            }
                                                        </div>
                                                    </div>
                                            </div>
                                        )})
                                    }
                                </div>
                            </div>

                            <div id="accordionSkills" >
                                    <div className="card s-pro" >
                                        <a className="card-link" data-toggle="collapse" href="#collapseSkills">
                                            <h4  >SKILLS</h4>
                                        </a>
                                        <div id="collapseSkills" className="collapse show" data-parent="#accordionSkills">
                                            <div className="card-body">
                                                {context.info.skills.map(e => {
                                                    return (<li key={e.title}>{e.title} </li>)})}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div id="accordionCertificate" >
                                    <div className="card s-pro" >
                                        <a className="card-link" data-toggle="collapse" href="#collapseCertificate">
                                            <h4  >CERTIFICATE</h4>
                                        </a>
                                        <div id="collapseCertificate" className="collapse show" data-parent="#accordionCertificate">
                                            <div className="card-body">
                                                {context.info.certificate.map((c,index) => {
                                                    return (
                                                        <div key={index} className="card" style={{width: " 200px", height:"150px", float: "left"}}>
                                                            <img className="card-img-top" src={c.imgUrl}
                                                                 alt={c.title} style={{width: "100%" ,height:"80%"}}/>
                                                            <div className="card-body" style={{margin:0,padding:0,float: "left", overflow:"hidden"}}>
                                                                <p className="card-text" style={{textAlign:"center",fontSize:"10px" ,margin:0,padding:0}}>{c.title}</p>
                                                                <p className="card-text" style={{textAlign:"center",fontSize:"10px" ,margin:0,padding:0}}>{c.time}</p>
                                                            </div>
                                                        </div>)})
                                                }
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            </div>
                    </div>)
                }
                }
            </InfoContext.Consumer>
        </div>
    );
}
}
export default Profile;
