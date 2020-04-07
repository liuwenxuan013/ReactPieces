import React from 'react';
// import axios from 'axios';
 import db from '../../db.json';
import $ from 'jquery';
import '../../container/Layout/Main/Main.css';
class Companies extends React.Component
{
    state = {

        companies:[]};

    componentDidMount()
    {

        $(document).ready(function ()
        {
            $("#myInput").on("keyup", function ()
            {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function ()
                {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                    return null;
                });
            })
        });
        //
        // axios.get("https://my-json-server.typicode.com/liuwenxuan013/demo/db")
        //     .then(response =>
        //     {
        //         console.log(response);
        //         this.setState({ company: response.data.people })
        // fetch("../db.json").then(function(data) {
            this.setState({ companies: db.companies });
        // });
    }
    render()
    {

        return (
            <div className="s-tb">
                <h4 >Companies</h4>
                <p style={{textAlign:"center"}} >Find your job opportunity </p>
                <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table className="table table-sm table-responsive table-hover" >
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip Code</th>
                    </tr>
                    </thead>
                    <tbody id="myTable" >
                    {db.companies.map(m =>{
                        return <tr key={m.id} >
                            <td>{m.name}</td>
                            <td>{m.website}</td>
                            <td>{m.email}</td>
                            <td>{m.address}</td>
                            <td>{m.city}</td>
                            <td>{m.zipCode}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default Companies;
