import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Navbar from "./nav";
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
      .filter((complaint) => complaint.customerId._id === customerIds)
      .map((currentComplaint) => {
        return (
          <Complaints complaint={currentComplaint} key={currentComplaint._id} />
        );
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="container text-center border border-light p-9">
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
        <button
          style={{
            width: "200px",
            height: "60px",
            borderRadius: "10px",
            marginTop: "10px",
            background: "#5083AD",
            marginLeft: "1215px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "#D6D6D6",
            }}
            href="/addcomp"
          >
            Add Complaint
          </a>
        </button>
      </div>
    );
  }
}
export default withRouter(ComplaintsList);
