import React from 'react'
import {MDBIcon} from 'mdbreact'; 

const info=()=>{
    return(
        <ul className="text-left" style={{listStyle:"none"}}>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="file-signature" /> Samar Omar</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="venus" /> Female</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="birthday-cake" /> 29/8/1998</h5>
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
                <MDBIcon icon="chalkboard-teacher" /> Advanced: English</h5>
            </li>
            <hr/>
            <li>
                <h5 className="text-secondary"> 
                <MDBIcon icon="robot" /> Current Interests: Back-End development</h5>
            </li>
        </ul>
    )
}

export default info