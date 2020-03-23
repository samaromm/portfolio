import React from 'react'
import { MDBPopover, MDBPopoverHeader, MDBPopoverBody, MDBBtn, MDBIcon} from "mdbreact";
import '../../Style.css';

const html =()=>{
    return(
        <MDBPopover placement="top" popover clickable id="popper1" >
            <MDBBtn tag="a" gradient="purple" className="buttonRound" style={{padding:"7px 13px"}} >
                <MDBIcon fab icon="html5" className="forSpin" size="3x"/> 
            </MDBBtn>
            <div>
                <MDBPopoverHeader>HTML - Superior level</MDBPopoverHeader>
                <MDBPopoverBody>
                Project done using html :
                <a href="https://github.com/samaromm/tiktok.git" target="blank">TikTok website with only html</a>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    )
}
export default html