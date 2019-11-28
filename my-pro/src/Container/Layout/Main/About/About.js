import React from 'react';
import './About.css';
import { InfoContext } from '../../../../Components/Info/Info';
class About extends React.Component
{
    render()
    {
        return <div className="About">
            <nav  >
                <ul>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>

                </ul>
            </nav>
            <section>
                <InfoContext.Consumer>
                    {(context) =>
                    {
                        return (
                            <div>
                                <h1 id="experience" >Experience</h1>
                                <div> {context.info.workExperience.map(e =>
                                {
                                    return <div key={e.jobTitle}>
                                        <h4>{e.jobTitle}</h4>
                                        <h5>{e.company}<br />{e.start}~{e.end}</h5>
                                        <p>{e.description.overall}</p>
                                        <p>{e.description.responsibilities}</p>
                                        <br />
                                    </div>

                                })
                                } </div>
                                <hr />
                                <h1 id="education">Education</h1>
                                <div> {context.info.education.map(e =>
                                {

                                    return <div key={e.degree}>

                                        <h4>{e.school}</h4>
                                        <p>{e.start}~{e.end}</p>
                                        <h5>{e.major}/ {e.degree} </h5>
                                        <p>{e.city} {e.country}</p>
                                        <br />

                                    </div>
                                })
                                } </div>
                                <hr />
                                <h1 id="skills">Skills</h1>
                                <div> {context.info.skills.map(s =>
                                {
                                    return <div key={s.title}>
                                        <p>{s.title}</p>
                                    </div>
                                })}
                                </div>
                                <br />

                            </div>)
                    }}
                </InfoContext.Consumer>
            </section>
        </div>
    }
}
export default About;