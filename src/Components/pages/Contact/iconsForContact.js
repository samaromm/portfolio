import React from 'react';
import {  MDBIcon} from "mdbreact";

const iconsForContact=()=>{
    return(
            <ul className="list-unstyled mb-0">
                <li>
                <MDBIcon fab icon="github-square" size="2x" className="purple-text"/><br/>
                <a href="https://github.com/samaromm" target="blank">Github</a>
                </li>
                <li>
                <MDBIcon icon="phone" size="2x" className="purple-text mt-2" />
                <p>+90 505 052 9560</p>
                </li>
                <li>
                <MDBIcon icon="envelope" size="2x" className="purple-text mt-2" />
                <p>samaromm98@gmail.com</p>
                </li>
                <li>
                <MDBIcon fab icon="linkedin" size="2x" className="purple-text mt-2"  /><br/>
                <a href="https://www.linkedin.com/in/samaromm/" target="blank">Linkedin</a>
                </li>
            </ul>
        )
}
export default iconsForContact