import React from 'react';
import { MDBCard, MDBCardHeader, MDBNav, MDBContainer} from "mdbreact";
import Logo from './logo'
import Icons from './icons';
import '../Style.css'
import {withRouter} from 'react-router-dom';


class Header extends React.Component {
  state = {
    activeItem: ""
}

toggle = tab => () => {
  if (this.state.activeItem !== tab) {
  this.setState({
    activeItem: tab
  });
  }
}

componentDidMount(){
  switch(this.props.location.pathname){
    case '/about': 
      this.setState({activeItem:"1"}); break;
    case '/cv': 
      this.setState({activeItem:"2"}); break;
    case '/projects': 
      this.setState({activeItem:"3"}); break;
    case '/contact': 
      this.setState({activeItem:"4"}); break;
    default:
      this.setState({activeItem:""}); break;
  }
}

componentWillUnmount(){
  clearInterval(this.interval)
}


render(){
  return (
    <div className="classic-tabs">
      <Logo activeItem={this.state.activeItem} toggle={this.toggle}/>
       <MDBContainer>
        <MDBCard className="text-center">
          <MDBCardHeader className="purple-gradient border border-white" >
            <MDBNav classicTabs className="d-flex flex-nowrap bd-highlight justify-content-center" >
                <Icons activeItem={this.state.activeItem} toggle={this.toggle}/>
            </MDBNav>
          </MDBCardHeader>
        </MDBCard>
      </MDBContainer>
    </div>
);
}
};

export default withRouter(Header);