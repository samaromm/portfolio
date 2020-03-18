import React from 'react';
import {MDBInput} from "mdbreact";

class contactForm extends React.Component{
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }
    
      render() {
        const { status } = this.state;
        return (
            <div className="text-left md-form d-flex flex-column">
                <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xqklbjae"
                method="POST">
                <MDBInput type="email" name="email" label="Your email"/>
                <MDBInput type="textarea" name="message" outline label="Your message" />
                {status === "SUCCESS" ? <p>Thanks!</p> :<button className=" btn btn-primary">Send</button>}
                {status === "ERROR" && <p>Sorry.. There was an error.</p>}
                </form>
           </div>
        );
      }
    
      submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
}
export default contactForm