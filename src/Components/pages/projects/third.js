import React from 'react';
import { MDBView, MDBMask, MDBCardTitle} from "mdbreact";
import '../../../Components/Style.css'
import Contents from './thirdContents';

class third extends React.Component{
    render(){
        return(
            <div className="mb-4">
                <MDBView hover onClick={this.props.toggleCollapse("collapse3")} className=" border border-dark forHover p-0 z-depth-1">
                    <MDBCardTitle style={{ color:"#fff", fontWeight:'bold', margin:'0 auto'}}>Page of Youth</MDBCardTitle>
                    <MDBMask className="flex-center" overlay="white-strong"/>
                </MDBView>
                <Contents collapseID={this.props.collapseID} />
            </div>
        )
    }
}
export default third