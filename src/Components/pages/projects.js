import React from 'react';
import { MDBCardText, MDBCardBody, MDBCardTitle, MDBBtn, MDBCard, MDBContainer} from "mdbreact";

export default class projects extends React.Component{
    render(){
        return(
            <MDBContainer className="rounded-0">
                <MDBCard className="text-center">
                    <MDBCardBody className="border border-white">
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>hmm</MDBCardText>
                        <MDBBtn></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}