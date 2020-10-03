import React from 'react';
import { MDBCardBody, MDBCard, MDBContainer} from "mdbreact";
import '../../../Components/Style.css'
import Modal from './ModalButtons'

export default class cv extends React.Component{
    render(){
        const scrollContainerStyle = { maxHeight: "90vh" };
        return(
            <MDBContainer>
                <MDBCard className="text-center forCv " style={{backgroundColor:"#354187"}}>
                    <MDBCardBody className=" border border-white scrollbar scrollbar-secondary rgba-white-light" style={scrollContainerStyle}>
                        <Modal/>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}