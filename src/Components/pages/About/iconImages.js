import React from "react";
import {
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
  MDBBtn,
  MDBIcon,
  MDBRow, MDBCol
} from "mdbreact";
import "../../Style.css";

const iconList = [
  {
    name: "Java Script - Superior level",
    project: "Project done using Java Script:",
    link: "https://github.com/samaromm/js-github-project.git",
    desc: "Fetch users info from Github",
    icon:"js"
  },
  {
    name: "React - Superior level",
    project: "Project done using React:",
    link: "github.com/samaromm/page-of-youth",
    desc: "A planner",
    icon:"react"
  },
  {
    name: "Java - Good level",
    project: "Project done using Java:",
    link: "https://github.com/samaromm/Ticket-Reservation.git",
    desc: "Ticket Reservation System",
    icon:"java"
  },
  {
    name: "NestJS - Beginner level",
    project: "Project done using NestJS:",
    link: "gitlab.com/devcamp2020/bookmark-be",
    desc: "Bookmark-BE",
    icon:"node-js"
  },
];

const allIconsPics = () => {
 let list = iconList.map(item=>{
    return (
        <MDBPopover placement="top" popover clickable id="popper1">
            <MDBBtn
            tag="a"
            gradient="purple"
            className="buttonRound"
            style={{ padding: "7px 9px" }}
            >
            <MDBIcon fab icon={item.icon} className="forSpin" size="3x" />
            </MDBBtn>
            <div>
            <MDBPopoverHeader>{item.name}</MDBPopoverHeader>
            <MDBPopoverBody>
                {item.project}
                <a href={item.link} target="blank">
                {item.desc}
                </a>
            </MDBPopoverBody>
            </div>
        </MDBPopover>
    );
 })
 return(
    <MDBRow className="d-flex justify-content-center mb-3">
        <MDBCol>
            {list}
        </MDBCol>
    </MDBRow>
)
};
export default allIconsPics;
