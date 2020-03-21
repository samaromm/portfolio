import React from 'react';
import { MDBIcon, MDBView, MDBMask, MDBCardTitle} from "mdbreact";
import '../../../Components/Style.css'
import Contents from './firstContents';

class first extends React.Component{
    render(){
        return(
            <div className="mb-4">
                <MDBView hover onClick={this.props.toggleCollapse("collapse1")} className=" border border-dark forHover p-0 z-depth-1">
                    <div className=" border border-dark float-left mr-4" style={{ backgroundColor:"#eeeeee", height:"60px"}} >
                        <MDBIcon fab icon="bootstrap"  size="2x"className="m-3 purple-text"/>
                    </div>
                    <MDBCardTitle style={{ color:"#fff", fontWeight:'bold'}}>Movie Fun</MDBCardTitle>
                    <MDBMask className="flex-center" overlay="white-strong"/>
                </MDBView>
                <Contents collapseID={this.props.collapseID} />
            </div>
        )
    }
}
export default first