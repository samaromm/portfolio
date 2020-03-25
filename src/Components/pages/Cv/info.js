import React from 'react'
import {MDBIcon} from 'mdbreact'; 

const info=()=>{
    return(
        <ul className="text-left" style={{listStyle:"none"}}>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="venus" /> Female</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="map-marker-alt" /> Istanbul</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="language" /> Native Language: Arabic</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="chalkboard-teacher" /> Trying to learn Turkish</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="robot" /> Current Interests: User scripts, Artificial Intelligence, and NLP</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="guitar" /> Interests not related to coding: Listening to music</h5>  
            </li>
            <hr/>
            <li>
                <h5 className="text-primary">Listen with me:</h5>
                <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/grC3tLi92Pw" title="music" allowfullscreen/>
                </div>
            </li>
        </ul>
    )
}

export default info