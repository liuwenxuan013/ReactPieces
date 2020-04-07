
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../../container/Layout/Main/Main.css';
class Movies extends React.Component
{
    state = {
        movies: []
    }
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

        axios.get("https://my-json-server.typicode.com/liuwenxuan013/demo/db")
            .then(response =>
            {

                this.setState({ movies: response.data.movies })
            });
    }
    render()
    {
        return (
            <div className="s-tb">
                <h4>My Favorite List</h4>

                <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table className="table table-sm  table-hove" >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Director</th>
                            <th>Stars</th>
                            <th>Nation</th>
                            <th>Duration</th>
                            <th>Year</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {this.state.movies.map(m =>
                        {
                            return <tr key={m.id}>

                                <td>{m.title}</td>

                                <td>{m.genre}</td>
                                <td>{m.director}</td>
                                <td>{m.stars}</td>
                                <td>{m.nation}</td>
                                <td>{m.duration}</td>
                                <td>{m.time}</td>
                                <td>{m.rating}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default Movies;
