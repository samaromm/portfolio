import React from 'react';
import { MDBCardText, MDBCardBody, MDBCardTitle, MDBBtn, MDBCard, MDBContainer} from "mdbreact";
import '../../../Components/Style.css'

export default class cv extends React.Component{
    render(){
        return(
            <MDBContainer>
                <MDBCard className="text-center">
                    <MDBCardBody className=" border border-white forCards">
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>cv</MDBCardText>
                        <MDBBtn></MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}