import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import { withRouter } from "react-router-dom";
// import { storage } from "../firebase.js";

export default class AddComplaint extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);

    this.state = {
      title: "",
      type: "",
      description: "",
      status: "Pending",
    };
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    let customerId = decoded._id;

    const complaint = {
      title: this.state.title,
      customerId: customerId,
      type: this.state.type,
      description: this.state.description,
      status: this.state.status,
    };
    axios
      .post("/app/addcomplaint", complaint)
      .then((res) => console.log(res.data));
    if (complaint.title || complaint.type || complaint.description) {
      window.location = "/complaintsId";
    } else alert("please fill all fields");
  }
  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form className="text-center border border-light p-9" action="#!">
            <h3> Here to help </h3>
            <div className="col">
              <label>Title</label>
              <input
                required={true}
                type="text"
                className="form-control"
                name="title"
                value={this.setState.title}
                onChange={this.onChangeHandle}
                text-align="center"
                placeholder="Insert Item Name"
              />
            </div>
            <br />
            <div className="col">
              <label>Select type</label>
              <select
                ref="userInput"
                required={true}
                className="form-control"
                name="type"
                value={this.setState.type}
                onChange={this.onChangeHandle}
              >
                <option value="">Select</option>
                <option value="Quality">Quality</option>
                <option value="Delay">Delay</option>
                <option value="Services">Services</option>
                <option value="Money">Money</option>
              </select>
            </div>
            <br />
            <div className="col">
              <label>Description </label>
              <textarea
                type="text"
                required={true}
                className="form-control"
                name="description"
                value={this.setState.description}
                onChange={this.onChangeHandle}
                placeholder="Please insert a description of your complain"
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-deep-orange darken-4"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
