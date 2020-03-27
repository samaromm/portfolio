import React from 'react';
import { MDBIcon, MDBView, MDBMask, MDBCardTitle} from "mdbreact";
import '../../../Components/Style.css'
import Contents from './firstContents';

class first extends React.Component{
    render(){
        return(
            <div className="mb-3">
                <MDBView hover onClick={this.props.toggleCollapse("collapse1")} className=" border border-dark forHover p-0 z-depth-1">
                    <div className=" border border-dark float-left mr-4" style={{ backgroundColor:"#eeeeee", height:"60px"}} >
                        <MDBIcon fab icon="bootstrap"  size="2x"className="purple-text" style={{padding:"12px"}}/>
                    </div>
                    <MDBCardTitle style={{ color:"#fff", fontWeight:'bold'}}>Movie Critics</MDBCardTitle>
                    <MDBMask className="flex-center" overlay="white-strong"/>
                </MDBView>
                <Contents collapseID={this.props.collapseID} />
            </div>
        )
    }
}
export default first