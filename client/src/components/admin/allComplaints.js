import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Navbar from "./nav";
import { Form } from "react-bootstrap";
const Complaints = (props) => (
  <tr>
    <td>{props.complaint.date}</td>
    <td>{props.complaint.customerId.email}</td>
    <td>{props.complaint.complaintTitle}</td>
    <td>{props.complaint.complaintType}</td>
    <td>{props.complaint.complaintMsg}</td>
    <td>{props.complaint.complaintStatus}</td>
    <td>
      <button
        style={{
          width: "100px",
          height: "40px",
          borderRadius: "10px",
          color: "white",
          background: "#9AB973",
          fontWeight: "bold",
        }}
        type="button"
        className="btn btn-deep-orange darken-4"
        onClick={() => {
          window.location.href = "/edit/" + props.complaint._id;
        }}
      >
        Edit
      </button>
    </td>
  </tr>
);

class ComplaintsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complaints: [],
      filteredComplaints: [],
      type: "",
    };
  }
  componentDidMount() {
    axios
      .get("/app/fetchcomplaints")
      .then((res) => {
        this.setState({ complaints: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ComplaintsList() {
    let listedComplaints =
      this.state.filteredComplaints.length > 0
        ? this.state.filteredComplaints
        : this.state.complaints;

    return listedComplaints.map((currentComplaint) => {
      return (
        <Complaints complaint={currentComplaint} key={currentComplaint._id} />
      );
    });
  }

  onChangetype(e) {
    let { filteredComplaints } = this.state;
    let string = e.target.value;
    this.setState({
      type: e.target.value,
    });
    filteredComplaints = this.state.complaints.filter((complaint) =>
      complaint.complaintType.includes(string)
    );
    this.setState({ filteredComplaints: filteredComplaints });
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="container text-center border border-light p-9">
          <Form>
            <Form.Group
              controlId="exampleForm.SelectCustomSizeSm"
              onChange={this.onChangetype.bind(this)}
            >
              <Form.Control
                as="select"
                size="sm"
                custom
                style={{
                  width: 155,
                  color: "white",
                  borderRadius: "5px",
                  height: "40px",
                  padding: "6px",
                  marginLeft: "1100px",
                  background: "#212121",
                }}
              >
                <option value="">Select by type</option>
                <option value="Quality">Quality</option>
                <option value="Delay">Delay</option>
                <option value="Services">Services</option>
                <option value="Money">Money</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Date</th>
                <th>Email</th>
                <th>Title</th>
                <th>Type</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{this.ComplaintsList()}</tbody>
          </table>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default withRouter(ComplaintsList);
