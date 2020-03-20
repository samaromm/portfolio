import React from 'react';
import {MDBInput} from "mdbreact";

class contactForm extends React.Component{
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: "",
          email: {
            value: "",
            valid: false
          },
          message: {
            value: "",
            valid: false
          },
        };
      }

      changeHandler = event => {
        this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
      };
    
      render() {
        const { status } = this.state;
        return (
            <div className="text-left md-form d-flex flex-column">
                <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xqklbjae"
                method="POST">
                <MDBInput type="email" name="email" label="Your email"
                value={this.state.email.value}
                className={this.state.email.valid ? "form-control is-valid" : "form-control is-invalid"}
                onChange={this.changeHandler}/> 
                <MDBInput type="textarea" name="message" outline label="Your message" 
                value={this.state.message.value}
                className={this.state.message.valid ? "form-control is-valid" : "form-control is-invalid"}
                onChange={this.changeHandler}/>
                {status === "SUCCESS" ? <p>Thanks! Message received</p> :<button className=" btn btn-secondary">Send</button>}
                {status === "ERROR" && <p>Sorry.. There was an error. Make sure to fill all the fields</p>}
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
          if (xhr.status === 200 && (this.state.email.valid)&& (this.state.message.valid)) {
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