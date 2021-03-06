import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "./nav";

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
        <Navbar />
        <br />
        <div className="container">
          <form
            style={{
              width: "1100px",
              padding: "20px 40px 15px 40px",
              marginLeft: "100px",
              border: "2px solid #4682B4E6",
              borderRadius: "10px",
            }}
            action="#!"
          >
            <p
              style={{
                textALign: "center",
                fontSize: "25px",
                marginLeft: "435px",
              }}
            >
              Write a complaint
            </p>
            <div className="col">
              <label>Title</label>
              <input
                style={{
                  width: "1000px",
                  height: "60px",
                }}
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
                style={{
                  width: "1000px",
                  height: "60px",
                }}
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
                style={{
                  width: "1000px",
                  height: "200px",
                }}
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
              style={{
                width: "200px",
                height: "45px",
                borderRadius: "10px",
                marginTop: "20px",
                marginLeft: "430px",
                background: "#5083AD",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#D6D6D6",
              }}
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
