import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class ModalBody extends Component{
    render(){
        return(
            <MDBModal isOpen={this.props.modal} toggle={this.props.close} size="lg" centered>
                <MDBModalHeader >{this.props.id}</MDBModalHeader>
                <MDBModalBody >
                    
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.props.close}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        )
    }
}