import React from 'react';
import Clock from '../../../../components/Clock/Clock';
import Converter from '../../../../components/Converter/Converter';
import AdventureCard from '../../../../components/AdventureCard/AdventureCard';
import ArtsCard from '../../../../components/ArtsCard/ArtsCard';
import ToggleButton from '../../../../components/ToggleButton/ToggleButton';
import Movies from '../../../../components/Movies/Movies';
import Music from '../../../../components/Music/Music';
import Companies from '../../../../components/Companies/Companies';
import 'bootstrap';
import "../Main.css";



function Features()
{
    return (<div >
        <div className="feature-header">
            <nav className="navbar navbar-expand-sm justify-content-center  navbar-light  ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#programming">Programming</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#adventure">Adventure</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#arts">Arts</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/features" id="navbardrop" data-toggle="dropdown">
                            Others</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#movies">Movies</a>
                            <a className="dropdown-item" href="#music">Music</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
            <div className="feature">

            <div id="programming" className="single-feature o" >
                <h3> Programming </h3>
                <blockquote className="blockquote"  >
                <p>A Web Developer not only plays a crucial role in Web design, development,
                    testing, operation, and support, but also has a great influence on marketing
                     and users retention. The deliverables created help clients be more efficient
                      and provide better services in this increasingly competitive market. </p>
                <p>I believe my experience and expertise in software development will be a valuable
                    resource in accomplishing these goals.</p>
                </blockquote>
                <hr />
                <h5 style={{textAlign:"center", color:"royalBlue"}}> ~ Play with Widgets ~ </h5>
                <Clock />
                <hr />
                <Converter />
                <hr />
                <div id="accordionProgramming">
                    <div className="card  border-0" style={{textAlign:"center"}}>
                        <a className="card-link"
                           data-toggle="collapse"
                           href="#collapseProgramming">
                            <ToggleButton />
                        </a>
                        <div id="collapseProgramming" className="collapse" data-parent="#accordionProgramming">
                            <div className="card-body" >
                                <Companies />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="adventure" className="single-feature" >
                <h3>Adventure</h3>
                <blockquote className="blockquote"  >
                    <p>Adventure isn’t hanging off a rope on the side of a mountain or living among lions. Adventure is an attitude to experience everyday things.</p>
                    <p>Life is short and the world is wide...</p>
                </blockquote>

                <div id="accordionAdventure">
                    <div className="card  border-0" style={{textAlign:"center"}} >
                        <a className="card-link" data-toggle="collapse" href="#collapseAdventure">
                            < ToggleButton show='true' />
                        </a>
                        <div id="collapseAdventure" className="collapse show" data-parent="#accordionAdventure">
                            <div className="card-body"
                                style={{
                                    backgroundColor:"lightGrey",

                                    border:"none",
                                    marginTop:"20px"
                                }}
                            >
                                <div className='row'>
                                    <div className="col-sm-3 " >
                                        <AdventureCard title="us" />
                                    </div>
                                    <div className="col-sm-3" >
                                        <AdventureCard title="canada" />
                                    </div>
                                    <div className="col-sm-3" >
                                        <AdventureCard title="china" />
                                    </div>
                                    <div className="col-sm-3" >
                                        <AdventureCard title="france" />
                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px" }}>
                                    <div className="col-sm-3" >
                                        <AdventureCard title="switzerland" />
                                    </div>
                                    <div className="col-sm-3" >
                                        <AdventureCard title="germany" />
                                    </div>
                                    <div className="col-sm-3" >
                                        <AdventureCard title="austria" />
                                    </div>
                                    <div className="col-sm-3" >
                                        <AdventureCard title="italy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="arts" className="single-feature " >
              <h3>Arts</h3>
                <blockquote className="blockquote" style={{fontFamily:"'Alex Brush', cursive"}} >
                    <p >"Art enables us to find ourselves and lose ourselves at the same time."</p>
                    <footer className="blockquote-footer" >Thomas Merton</footer>
                </blockquote>
                <blockquote className="blockquote" style={{fontFamily:"'Alex Brush', cursive"}} >
                    <p >"To practice any art, no matter how well or how badly, is a way to make your soul grow, for heaven’s sake. So do it."</p>
                    <footer className="blockquote-footer">Kurt Vonnegut</footer>
                </blockquote>

                <br />
                <p style={{padding:"0 50px "}} >
                    I think of art as the highest level of creativity. To me, it is one of the greatest sources of enjoyment</p>
                <div id="accordionArts">
                    <div className="card border-0" style={{textAlign:"center"}}  >
                        <a className="card-link" data-toggle="collapse" href="#collapseArts">
                            <ToggleButton show='true' />
                        </a>
                        <div id="collapseArts" className="collapse show" data-parent="#accordionArts">
                            <div className="card-body s-card">
                                <ArtsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="movies" className="single-feature " >
                <h3>Movies</h3>
                <blockquote className="blockquote" style={{fontFamily:"'Alex Brush', cursive"}} >
                <p style={{fontFamily:"Lovers+Quarre"}}>"The whole of life is just like watching
                    a film. Only it's as though you always get in ten minutes after the big picture has started, and no-one will
                    tell you the plot, so you have to work it out all yourself from the clues." </p>
                    <footer className="blockquote-footer" >Terry Pratchett</footer>

                </blockquote>
                <div id="accordionMovies">
                    <div className="card  border-0" style={{textAlign:"center"}} >
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseMovies">
                            <ToggleButton />

                        </a>
                        <div id="collapseMovies" className="collapse" data-parent="#accordionMovies">
                            <div className="card-body">
                                <Movies />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="music" className="single-feature" >
                <h3>Music</h3>
                <blockquote className="blockquote " style={{fontFamily:"'Alex Brush', cursive"}}>
                    <p style={{fontFamily:"Lovers+Quarre"}}>“After silence, that which comes nearest to expressing the inexpressible is music.” </p>
                    <footer className="blockquote-footer" >Aldous Huxley</footer>
                </blockquote>
            <div id="accordionMusic">
                <div className="card border-0" style={{textAlign:"center"}} >
                    <a className="collapsed card-link" data-toggle="collapse" href="#collapseMusic" >
                        <ToggleButton />
                    </a>
                    <div id="collapseMusic" className="collapse" data-parent="#accordionMusic">
                        <div className="card-body">
                            <Music />
                        </div>
                    </div>
                </div>
            </div>
        </div >

        </div>
        </div>

    );
}


export default Features;
