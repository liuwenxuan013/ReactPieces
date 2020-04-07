import React from 'react';
// import axios from 'axios';
import $ from 'jquery';
import db from '../../db.json';
class People extends React.Component
{
    state = {
       people: []
    };
    componentDidMount()
    {

        $(document).ready(function ()
        {
            $("#myInput").on("keyup", function ()
            {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function ()
                {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            })
        });

        // axios.get("https://my-json-server.typicode.com/liuwenxuan013/demo/db")
        //     .then(response =>
        //     {
        //         console.log(response);
        //         this.setState({ people: response.data.people })
        //     });
        this.setState({ people: db.people });
    }
    render()
    {

        return (
            <div className="container ">
                <h2>People</h2>
                <p>Connect to people all around the World </p>
                <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table className="table  table-sm table-responsive table-hover" >
                    <thead thead-light>
                    <tr>
                        {/*<th>Avatar</th>*/}
                        <th>Name</th>
                        {/*<th>Company</th>*/}
                        <th>Email</th>
                        {/*<th>Phone</th>*/}
                        <th>City</th>
                        {/*<th>Zip Code</th>*/}


                    </tr>
                    </thead>
                    <tbody id="myTable">
                    {db.companies.map(m =>
                    {
                        return <tr key={m.id}>
                            {/*<td><img src={m.avatar} alt={m.name} style={{width:"40px", height:"40px"}}/></td>*/}
                            <td>{m.name}</td>
                            {/*<td>{m.company}</td>*/}
                            <td>{m.email}</td>
                            {/*<td>{m.phone}</td>*/}
                            <td>{m.city}</td>
                            {/*<td>{m.zipCode}</td>*/}


                        </tr>
                    })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default People;
