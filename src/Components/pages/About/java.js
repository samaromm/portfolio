import React from 'react'
import { MDBPopover, MDBPopoverHeader, MDBPopoverBody, MDBBtn, MDBIcon} from "mdbreact";
import '../../Style.css';

const java =()=>{
    return(
        <MDBPopover placement="top" popover clickable id="popper1" >
            <MDBBtn tag="a" gradient="purple" className="buttonRound" style={{padding:"7px 13px"}} >
                <MDBIcon fab icon="java" className="forSpin" size="3x"/> 
            </MDBBtn>
            <div>
                <MDBPopoverHeader>Java - Superior level</MDBPopoverHeader>
                <MDBPopoverBody>
                Project done using Java :
                <a href="https://github.com/samaromm/Ticket-Reservation.git" target="blank">Ticket Reservation System</a>
                </MDBPopoverBody>
            </div>
        </MDBPopover>
    )
}
export default java