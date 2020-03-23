import React from 'react'
import { MDBPopover, MDBPopoverHeader, MDBPopoverBody, MDBBtn, MDBIcon} from "mdbreact";
import '../../Style.css';

const js =()=>{
    return(
        <MDBPopover placement="top" popover clickable id="popper1" >
            <MDBBtn tag="a" gradient="purple" className="buttonRound" style={{padding:"7px 9px"}} >
                <MDBIcon fab icon="js" className="forSpin" size="3x"/> 
            </MDBBtn>
            <div>
                <MDBPopoverHeader>Java Script - Superior level</MDBPopoverHeader>
                <MDBPopoverBody>
                Project done using Java Script:
                <a href="https://github.com/samaromm/js-github-project.git" target="blank">Fetch users info from Github</a>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    )
}
export default js