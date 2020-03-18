import React from 'react';
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import '../../Style.css';
import Form from './contactForm';
import Icons from './iconsForContact';

export default class contact extends React.Component{
    render(){
        const scrollContainerStyle = { maxHeight: "70vh" };
        return(
            <MDBContainer>
                <MDBCard className="text-center">
                    <MDBCardBody className="border border-white  scrollbar scrollbar-secondary" style={scrollContainerStyle}>
                        <h2 className="h1-responsive font-weight-bold text-center ">Contact me</h2>
                        <MDBRow>
                            <MDBCol md="9" className="md-0 mb-5">
                                <Form/>
                            </MDBCol>
                            <MDBCol md="3" className="text-center">
                                <Icons/>
                            </MDBCol>        
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}