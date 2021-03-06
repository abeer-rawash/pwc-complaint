import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
// import Footer from "./Footer";
// import { Form, DropdownButton } from "react-bootstrap";
const Complaints = (props) => (
  <tr>
    <td>{props.complaint.date}</td>
    <td>{props.complaint.complaintTitle}</td>
    <td>{props.complaint.complaintType}</td>
    <td>{props.complaint.complaintMsg}</td>
    <td>{props.complaint.complaintStatus}</td>
  </tr>
);

class ComplaintsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complaints: [],
    };
  }
  componentDidMount() {
    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    let customerId = decoded._id;

    axios
      .get("/app/fetchcomplaints/" + customerId)
      .then((res) => {
        this.setState({ complaints: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ComplaintsList() {
    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    let customerIds = decoded._id;
    console.log(this.state.complaints, "pleaseeeeeee");
    return this.state.complaints
      .filter((complaint) => complaint.customerId._id == customerIds)
      .map((currentComplaint) => {
        return (
          <Complaints complaint={currentComplaint} key={currentComplaint._id} />
        );
      });
  }

  render() {
    return (
      <div>
        <br />
        <div className="container text-center border border-light p-9">
          <h2>Your Complaints List</h2>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Type</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{this.ComplaintsList()}</tbody>
          </table>
        </div>
        <button>
          <a href="addcomp">Add Complaint</a>
        </button>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default withRouter(ComplaintsList);
