import React from 'react'
import { MDBPopover, MDBPopoverHeader, MDBPopoverBody, MDBBtn, MDBIcon} from "mdbreact";
import '../../Style.css';

const bootstrap =()=>{
    return(
        <MDBPopover placement="top" popover clickable id="popper1" >
            <MDBBtn tag="a" gradient="purple" className="buttonRound" style={{padding:"7px 10px"}} >
                <MDBIcon fab icon="bootstrap" className="forSpin" size="3x" />
            </MDBBtn>
            <div>
                <MDBPopoverHeader>Bootstrap - Superior level</MDBPopoverHeader>
                <MDBPopoverBody>
                 Project done using bootstrap:
                 <a href="https://mervegumuskaya.github.io/moviefun/" target="blank"> Movie Fun</a>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    )
}
export default bootstrap