import React from "react";
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import "../Style.css";

const iconList = [
  { activeItem: "1", to: "/about", icon:"user-circle", name: "About" },
  { activeItem: "2", to: "/cv", icon:"book-reader", name: "CV" },
  {
    activeItem: "3",
    to: "/projects",
    icon: "code-branch",
    name: "Projects",
  },
  {
    activeItem: "4",
    to: "/contact",
    icon: "address-book",
    name: "Contact",
  },
];

const aboutIcon = (props) => {
  let list = iconList.map((item) => {
    return (
      <MDBNavItem className="flex-lg-fill bd-highlight col-example">
        <MDBNavLink
          className={props.activeItem === item.activeItem ? "indigo-text " : "white-text "}
          to={item.to}
          exact
          active={props.activeItem === item.activeItem}
          onClick={props.toggle(item.activeItem)}
        >
          <MDBIcon icon={item.icon} size="lg" className="forSpin" />
          <br />
          {item.name}
        </MDBNavLink>
      </MDBNavItem>
    );
  });

  return <>{list}</>;
};
export default aboutIcon;
