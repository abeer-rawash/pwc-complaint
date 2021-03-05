import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import { withRouter } from "react-router-dom";
// import { storage } from "../firebase.js";

export default class AddComplaint extends Component {
  constructor(props) {
    super(props);
    //Defining the "this" in the functions using .bind method

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    // this.onChangeimg = this.onChangeimg.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);

    this.state = {
      title: "",
      type: "",
      description: "",
      //   image: null,
      //   url: "",
    };
  }

  onChangeHandle(event) {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  //   onChangeimg(e) {
  //     if (e.target.files[0]) {
  //       this.setState({
  //         image: e.target.files[0],
  //       });
  //     } else console.log("error in onchangeimg");
  //   }

  //   handleUpload(e) {
  //     e.preventDefault();
  //     const uploadTask = storage
  //       .ref(`/images/${this.state.image.name}`)
  //       .put(this.state.image);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {},
  //       (error) => {
  //         console.log(error, "error");
  //       },
  //       () => {
  //         storage
  //           .ref("images")
  //           .child(this.state.image.name)
  //           .getDownloadURL()
  //           .then((url) => {
  //             this.setState({
  //               url: url,
  //             });
  //           });
  //       }
  //     );
  //   }

  onSubmit(e) {
    e.preventDefault();

    let token = localStorage.getItem("token");
    console.log(token, "token");
    var decoded = jwt_decode(token);
    let customerId = decoded._id;
    console.log(decoded, "decoded");

    const complaint = {
      title: this.state.title,
      customerId: customerId,
      type: this.state.type,
      description: this.state.description,
      //   image: this.state.url,
    };
    console.log(complaint);
    axios
      .post("/app/addcomplaint", complaint)
      .then((res) => console.log(res.data));
    // window.location = "/ItemsList";
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
                required="true"
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
                required="true"
                className="form-control"
                name="type"
                value={this.setState.type}
                onChange={this.onChangeHandle}
              >
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
                required="true"
                className="form-control"
                name="description"
                value={this.setState.description}
                onChange={this.onChangeHandle}
                placeholder="Please insert a description of your complain"
              />
            </div>
            <br />

            {/* <div className="col">
              <label>Add Image</label>
              <input
                type="file"
                required="true"
                className="form-control"
                onChange={this.onChangeimg}
              />
              <button onClick={this.handleUpload}>Upload</button>
              <br />
              <img
                src={this.state.url || "http://via.placeholder.com/100x150"}
                alt="firebase-image"
                width="200px"
                height="200px"
              />
            </div>
            <br />
            <div> */}
            <button
              type="submit"
              className="btn btn-deep-orange darken-4"
              onClick={this.onSubmit}
            >
              Submit
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    );
  }
}
