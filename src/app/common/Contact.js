import React, { Component } from "react";
import { serviceContact } from "../services/serviceContact.js";
import { redirect } from "next/navigation";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      company: "",
      subject: "",
      comment: "",
      loginerror: "",
      redirect: false,
      fields: {},
      errors: {},
    };
    this.ContactUs = this.ContactUs.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Name field is required.";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Name
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone field is required.";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["phone"] = "Please enter valid phone";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email field is required.";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //Name
    if (!fields["comment"]) {
      formIsValid = false;
      errors["comment"] = "Comment field is required.";
    }
    if (!fields["company"]) {
      formIsValid = false;
      errors["company"] = "company field is required.";
    }
    if (!fields["subject"]) {
      formIsValid = false;
      errors["subject"] = "subject field is required.";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  ContactUs(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      serviceContact("sendmail.php", this.state).then((result) => {
        let responseJson = result;
        console.log(responseJson);
        if (responseJson.status == "200") {
          document.getElementById("displayMessage").innerHTML =
            '<span style="color:green;font-weight:bold;">Thank you for contact with us. Our team will contact you soon.</span>';
          this.setState({ name: "" });
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("email").value = "";
          document.getElementById("comment").value = "";
          document.getElementById("company").value = "";
          document.getElementById("subject").value = "";
          this.setState({ redirect: true });
        } else {
          this.setState({ loginerror: responseJson.message });
          document.getElementById("displayMessage").innerHTML =
            '<span style="color:red;">Required fileds are missing</span>';
        }
      });
    } else {
      //alert("Form has errors.")
    }
  }
  onChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (this.state.redirect) {
      return redirect("/thankyou");
    }

    return (
      <>
        <form
          id="project-contact-form"
          action="#"
          method="post"
          autoComplete="off"
          className="contact-us-page-main-from"
        >
          <div className="form-group">
            <div className="displayMessage" id="displayMessage"></div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name *"
                  className="big-input form-control"
                  required=""
                  onChange={this.onChange}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["name"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Contact Number *"
                  className="big-input form-control"
                  required=""
                  onChange={this.onChange}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["phone"]}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                  className="big-input form-control"
                  required=""
                  onChange={this.onChange}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["email"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company *"
                  className="big-input form-control"
                  required=""
                  onChange={this.onChange}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["company"]}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="subject *"
                  className="big-input form-control"
                  required=""
                  onChange={this.onChange}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["subject"]}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Message"
                  rows="6"
                  className="big-textarea form-control"
                  required=""
                  onChange={this.onChange}
                ></textarea>
                <span style={{ color: "red" }}>
                  {this.state.errors["comment"]}
                </span>
              </div>
            </div>
          </div>
          <button
            id="project-contact-us-button"
            type="button"
            className="btn btn-default"
            onClick={this.ContactUs}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
