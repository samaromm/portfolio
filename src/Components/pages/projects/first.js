import React from 'react';
import { MDBView, MDBMask, MDBCardTitle} from "mdbreact";
import '../../../Components/Style.css'
import Contents from './firstContents';

class first extends React.Component{
    render(){
        return(
            <div className="mb-3">
                <MDBView hover onClick={this.props.toggleCollapse("collapse1")} className=" border border-dark forHover p-0 z-depth-1">
                    <MDBCardTitle style={{ color:"#fff", fontWeight:'bold', margin:'0 auto'}}>Movie Critics</MDBCardTitle>
                    <MDBMask className="flex-center" overlay="white-strong"/>
                </MDBView>
                <Contents collapseID={this.props.collapseID} />
            </div>
        )
    }
}
export default first