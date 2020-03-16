import React from 'react';
import { MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from "mdbreact";

class card extends React.Component{
    render(){
        return(
            <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>
                        With supporting text below as a natural lead-in to additional
                        content.
                    </MDBCardText>
                <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
        )
    }
}
export default card
