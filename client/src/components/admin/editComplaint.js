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

  useEffect() {
    axios
      .get("/app/addcomplaint/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          status: response.data.complaintStatus,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const complaint = {
      complaintStatus: this.state.status,
    };

    axios
      .patch(
        "/app/addcomplaint/update/" + this.props.match.params.id,
        complaint
      )
      .then((res) => console.log(res.data));

    window.location = "/complaints";
  }

  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            height: "350px",
            width: "600px",
            border: "2px solid #9AB973",
            padding: "50px 30px 30px 30px",
            margin: "7% 0% 0% 30%",
            borderRadius: "10px",
          }}
          className="container"
        >
          <form
            style={{
              padding: "15px 30px 30px 30px",
            }}
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
