import React from 'react'
import { MDBPopover, MDBPopoverHeader, MDBPopoverBody, MDBBtn, MDBIcon} from "mdbreact";
import '../../Style.css';

const react =()=>{
    return(
        <MDBPopover placement="top" popover clickable id="popper1" >
            <MDBBtn tag="a" gradient="purple" className="buttonRound" style={{padding:"7px 9px"}} >
                <MDBIcon fab icon="react" className="forSpin" size="3x"/> 
            </MDBBtn>
            <div>
                <MDBPopoverHeader>React - Superior level</MDBPopoverHeader>
                <MDBPopoverBody>
                Project done using React :
                <a href="https://github.com/samaromm/movie-explorer.git" target="blank">Movie Explorer</a>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    )
}
export default react