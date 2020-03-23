import React from 'react';
import { MDBCardBody, MDBCard, MDBContainer} from "mdbreact";
import '../../../Components/Style.css'
import Modal from './ModalButtons'

export default class cv extends React.Component{
    render(){
        const scrollContainerStyle = { maxHeight: "80vh" };
        return(
            <MDBContainer>
                <MDBCard className="text-center">
                    <MDBCardBody className=" forCards border border-white scrollbar scrollbar-secondary" style={scrollContainerStyle}>
                        <Modal/>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}