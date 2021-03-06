import React, { Component } from "react";
import axios from "axios";
import Navbar from "./nav";

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
      <div>
        <Navbar />
        <div
          style={{
            marginTop: "100px",
            border: "2px solid",
            height: "400px",
            width: "600px",
          }}
          className="container"
        >
          <form
            style={{
              padding: "40px",
              marginTop: "30px",
            }}
            // className=" border border-red p-5"
            action="#!"
            onSubmit={this.onSubmit}
          >
            <p
              style={{
                textAlign: "center",
              }}
              className="h4 mb-4"
            >
              Edit Complaint Status
            </p>
            <div className="type">
              <select
                style={{
                  width: "500px",
                  marginTop: "40px",
                  height: "50px",
                }}
                ref="userInput"
                required
                className="form-control"
                value={this.state.type}
                onChange={this.onChangeStatus}
              >
                Select Type
                <option value="">Select Type</option>
                <option value="Pending">Pending</option>
                <option value="Dismissed">Dismissed</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
            <br />

            <div>
              <button
                style={{
                  marginLeft: "200px",
                  marginTop: "40px",
                  width: "100px",
                }}
                type="submit"
                value="Submit"
                className="btn btn-dark"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
