import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


import 'bootstrap';
import $ from 'jquery';



    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });



function MyLinks(){


    return (
        <div >
            <a href="https://www.linkedin.com/in/laura-liu-a77011158/"
               target="_blank"
               rel="noopener noreferrer">
                < LinkedInIcon style={{marginRight:'10px'}} />
            </a>
            <a href="https://github.com/liuwenxuan013"
               target="_blank"
               rel="noopener noreferrer">
                < GitHubIcon  style={{marginRight:'10px'}}/>
            </a>

            <a href="./images/Laura Liu-Resume.pdf" download="Laura Liu - Resume">
                <AssignmentIndIcon  style={{marginRight:'10px'}}
                                    data-toggle="tooltip"
                                    title="My Resume"/>
            </a>
            {/*https://liuwenxuan-a6.herokuapp.com/home*/}
            <a href="https://www.facebook.com/wenxuan.liu.laura"
               target="_blank"
               rel="noopener noreferrer">
                <FacebookIcon />
            </a>

        </div>);

}


export default MyLinks;

