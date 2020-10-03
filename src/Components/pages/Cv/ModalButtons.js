import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import Body from "./ModalBody";
import "../../Style.css";
import Resume from "../../../pdf/Resume.pdf";

class ModalButtons extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      id: "",
    };
  }

  close = () => {
    this.setState({
      modal: !this.state.modal,
      id: "",
    });
  };

  open = (event) => {
    this.setState({
      modal: !this.state.modal,
      id: event.target.id,
    });
  };

  render() {
    const itemsList = [
      { id: "General Information", name: "General Info" },
      { id: "Education", name: "Education" },
      { id: "Certifications", name: "Certificate" },
      { id: "Skills", name: "Skills" },
      { id: "Experience", name: "Experience" },
    ];

    let btnList = itemsList.map((item) => {
      return (
        <MDBBtn
          onClick={this.open}
          id={item.id}
          className="p-0 bd-highlight border cvButtons forSpin"
          gradient="blue"
        >
          {item.name}
        </MDBBtn>
      );
    });

    return (
      <MDBContainer style={{ height: "100%" }}>
        <MDBRow
          className="d-flex align-items-center bd-highlight mb-3 
      justify-content-center animated slideInRight"
          style={{ height: "100%" }}
        >
          <MDBCol>
            {btnList}
            <a
              href={Resume}
              rel="noopener noreferrer"
              style={{ color: "white" }}
              target="blank"
              variant="outline-info"
            >
              <MDBBtn
                className="p-0 bd-highlight border cvButtons forSpin"
                gradient="blue"
              >
                pdf Copy
              </MDBBtn>
            </a>
          </MDBCol>
        </MDBRow>
        <Body id={this.state.id} modal={this.state.modal} close={this.close} />
      </MDBContainer>
    );
  }
}

export default ModalButtons;
