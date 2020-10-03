import React from 'react'

const education=()=>{
    return(
        <ul className="text-left" style={{listStyle:"none"}}>
            <li>
                <h3 className="text-secondary">Üsküdar Üniversitesi</h3>
                <h5>2017 - Present</h5>
                <p> Currently studying software engineering at Üsküdar University<br/>
                    GPA: 3.91/4<br/>
                    expected graduation year: 2021.
                </p>
            </li>
            <hr/>
            <li>
                <h3 className="text-secondary">Re:Coded Bootcamp</h3>
                <h5>2019 - 2020</h5>
                <p>Front End Web Development (HTML, CSS, JavaScript, React)<br/>
                    5 month intense web development program run by Re:Coded with Flatiron School's curriculum.
                </p>
            </li>
            <hr/>
            <li>
                <h3 className="text-secondary">Talentvar Bootcamp </h3>
                <h5>2020</h5>
                <p> Back End Web Development (Mongodb, NodeJS)<br/>
                    2 months backend development program.<br/> Learn by directly working on the main project.
                </p>
            </li>
        </ul>
    )
}

export default education