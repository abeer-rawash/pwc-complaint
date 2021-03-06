import React, { Component } from "react";
import { links, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
// import Footer from "./Footer";
import { Form, DropdownButton } from "react-bootstrap";
const Complaints = (props) => (
  <tr>
    <td>{props.complaint.date}</td>
    <td>{props.complaint.customerId.email}</td>
    <td>{props.complaint.complaintTitle}</td>
    <td>{props.complaint.complaintType}</td>
    <td>{props.complaint.complaintMsg}</td>
    <td>{props.complaint.complaintStatus}</td>
    {/* <td>
      <img
        src={props.complaint.image}
        width="200"
        height="200"
        class="w3-round"
        alt="Norway"
      />
    </td> */}
    {/* <td>
      <button
        style={{ width: 120, height: 40 }}
        type="button"
        className="btn btn-deep-orange darken-4"
        onClick={() => {
          console.log("onclick");
          if (
            window.localStorage.length > 0 &&
            window.localStorage.email === props.complaint.email
          ) {
            window.location.href = "/edit/" + props.complaint._id;
            console.log("worked");
          } else {
            alert("user can only edit the complaints he added");
            console.log("didnt work");
          }
        }}
      >
        Edit
      </button>

      <button
        style={{ width: 120, height: 40 }}
        type="button"
        className="btn btn-deep-orange darken-4"
        onClick={() => {
          console.log(props.item, "thiiiis");
          console.log(window.localStorage.username, " Storaaaage");
          if (
            window.localStorage.length > 0 &&
            window.localStorage.username === props.item.username
          ) {
            props.deleteComplaint(props.item._id);
          } else {
            alert("user can only delete the complaints he added");
          }
        }}
      >
        Delete
      </button>
    </td>
  </tr> */}
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
  deleteComplaint(id) {
    // console.log( window.localStorage.username, " Storaaaage")
    // console.log(this.props.complaints.username, " thisssss")

    axios.delete("/app/addcomplaint" + id).then((res) => console.log(res.data));
    this.setState({
      complaints: this.state.complaints.filter((el) => el._id !== id),
    });
  }

  ComplaintsList() {
    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    let customerIds = decoded._id;
    return this.state.complaints
      .filter((complaint) => complaint.customerId._id == customerIds)
      .map((currentComplaint) => {
        return (
          <Complaints
            complaint={currentComplaint}
            deleteComplaint={this.deleteComplaint}
            key={currentComplaint._id}
          />
        );
      });
  }

  render() {
    return (
      <div>
        <br />
        <div className="container text-center border border-light p-9">
          <h2>Clothing</h2>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control
                as="select"
                size="sm"
                custom
                style={{
                  width: 155,
                  color: "white",
                  border: "orange",
                  margin: "50px 0px 10px 250px",
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
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Image</th>
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
