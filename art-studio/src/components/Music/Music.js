
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../../container/Layout/Main/Main.css';
class  Music extends React.Component
{
    state = {
        music: []
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
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                    return null;
                });
            })
        });

        axios.get("https://my-json-server.typicode.com/liuwenxuan013/demo/db")
            .then(response =>
            {

                this.setState({ music: response.data.music })
            });
    }
    render()
    {

        return (
            <div className="s-tb">
                <h4>Playlist</h4>
                <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table className="table table-sm table-hove" >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Singer</th>
                            <th>Genre</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {this.state.music.map(m =>
                        {
                            return <tr key={m.id}>
                                <td>{m.title}</td>
                                <td>{m.album}</td>
                                <td>{m.singer}</td>
                                <td>{m.genre}</td>
                                <td>{m.time}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default Music;
