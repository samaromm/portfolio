import React from 'react';
import { MDBCardText, MDBCardBody, MDBCardTitle, MDBBtn, MDBCard, MDBContainer} from "mdbreact";

export default class cv extends React.Component{
    render(){
        return(
            <MDBContainer>
                <MDBCard className="text-center">
                    <MDBCardBody className="border border-white">
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>cv</MDBCardText>
                        <MDBBtn></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}