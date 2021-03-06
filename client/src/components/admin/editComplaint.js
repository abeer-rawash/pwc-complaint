import React, { Component } from "react";
import axios from "axios";

export default class EditComplaint extends Component {
  constructor(props) {
    super(props);

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      status: "",
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id, "this.props.match.params.id");
    axios
      .get("/app/addcomplaint/" + this.props.match.params.id)
      .then((response) => {
        console.log(response.data.complaintStatus, "responsee");
        this.setState({
          status: response.data.complaintStatus,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeStatus(e) {
    console.log(e.target.value, "e.target.value");
    this.setState({
      status: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const complaint = {
      status: this.state.status,
    };
    console.log(complaint);

    axios
      .patch(
        "/app/addcomplaint/update/" + this.props.match.params.id,
        complaint
      )
      .then((res) => console.log(res.data));

    // window.location = "/complaints";
  }

  render() {
    return (
      <div className="container">
        <form
          className="text-center border border-light p-5"
          action="#!"
          onSubmit={this.onSubmit}
        >
          <p className="h4 mb-4">Edit Complaint Status</p>
          <div className="type">
            <label>Select Type </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeStatus}
            >
              <option value="Pending">Pending</option>
              <option value="Dismissed">Dismissed</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <br />

          {/* <div className="col">
            <label>Description </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              placeholder="Please insert a detailed description of your item and add its current condition"
            />
          </div>

          <br />

          <div className="col">
            <label>Donor Phone Number </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phoneNumber}
              onChange={this.onChangeStatus}
              placeholder="Please insert your phone number"
            />
          </div>

          <br /> */}

          <div>
            <button type="submit" value="Submit" className="btn btn-dark">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
