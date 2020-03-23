import React from 'react';
import { MDBIcon, MDBView, MDBMask, MDBCardTitle} from "mdbreact";
import '../../../Components/Style.css'
import Contents from './thirdContents';

class third extends React.Component{
    render(){
        return(
            <div className="mb-4">
                <MDBView hover onClick={this.props.toggleCollapse("collapse3")} className=" border border-dark forHover p-0 z-depth-1">
                    <div className=" border border-dark float-left mr-4" style={{ backgroundColor:"#eeeeee", height:"60px"}} >
                        <MDBIcon fab icon="react" size="2x" className="purple-text" style={{padding:"10px"}}/>
                    </div>
                    <MDBCardTitle style={{ color:"#fff", fontWeight:'bold'}}>Pizza Form</MDBCardTitle>
                    <MDBMask className="flex-center" overlay="white-strong"/>
                </MDBView>
                <Contents collapseID={this.props.collapseID} />
            </div>
        )
    }
}
export default third