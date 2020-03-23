import React from 'react'
import { MDBPopover, MDBPopoverHeader, MDBPopoverBody, MDBBtn, MDBIcon} from "mdbreact";
import '../../Style.css';

const css =()=>{
    return(
        <MDBPopover placement="top" popover clickable id="popper1" >
            <MDBBtn tag="a" gradient="purple" className="buttonRound" style={{padding:"7px 7px"}} >
                <MDBIcon fab icon="css3" className="forSpin" size="3x"/> 
            </MDBBtn>
            <div>
                <MDBPopoverHeader>CSS - Superior level</MDBPopoverHeader>
                <MDBPopoverBody>
                Project done using css :
                <a href="https://github.com/samaromm/28.12.2019-team-1.git" target="blank">Blog</a>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    )
}
export default css