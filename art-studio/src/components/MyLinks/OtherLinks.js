import React from 'react';

import AppsIcon from '@material-ui/icons/Apps';

import 'bootstrap';
import $ from 'jquery';




$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
});



function OtherLinks(){


    return (
        <div >

            <a href=" https://laura-pro-app.herokuapp.com/home"
               target="_blank"
               rel="noopener noreferrer"
               style={{marginRight:'10px'}}
               data-toggle="tooltip"
               title="React App"
            >
              <img className="avatar info" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                      alt="reactIcon"
              />
            </a>

            <a href=" https://liuwenxuan-a6.herokuapp.com/home"
               target="_blank"
               rel="noopener noreferrer"
               style={{marginRight:'10px'}}
               data-toggle="tooltip"
               title="Angular App"

            >
                <img className="avatar info" src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
                     alt="angularIcon"
                />
            </a>
            <a href=" https://employ-management-app.herokuapp.com/"
               target="_blank"
               rel="noopener noreferrer"
               style={{marginRight:'10px'}}
               data-toggle="tooltip"
               title="Employee Management App"
            >
               < AppsIcon/>

            </a>

        </div>);

}


export default OtherLinks;

