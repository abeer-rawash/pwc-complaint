import React, { Component } from "react";
import { links, withRouter } from "react-router-dom";
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
  </tr>
);

class ComplaintsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complaints: [],
      filteredComplaints: [],
      SearchString: "",
      type: "",
    };
  }
  componentDidMount() {
    axios
      .get("/app/fetchcomplaints")
      .then((res) => {
        console.log(res, "resres");
        this.setState({ complaints: res.data });
        console.log(this.state.complaints, "hayniiii");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ComplaintsList() {
    // let listedComplaints =
    //   this.state.filteredComplaints.length > 0
    //     ? this.state.filteredComplaints
    //     : this.state.complaints;

    return this.state.complaints.map((currentComplaint) => {
      return (
        <Complaints complaint={currentComplaint} key={currentComplaint._id} />
      );
    });
  }

  // onChangetype(e) {
  //   let { filteredComplaints } = this.state;
  //   let string = e.target.value;
  //   this.setState({
  //     type: e.target.value,
  //   });
  //   console.log(filteredComplaints, "filteredComplaints");
  //   filteredComplaints = filteredComplaints.filter((complaint) =>
  //     complaint.type.includes(string)
  //   );
  //   this.setState({ filteredComplaints: filteredComplaints });
  // }

  render() {
    return (
      <div>
        <br />
        <div className="container text-center border border-light p-9">
          <h2>Clothing</h2>
          <Form>
            <Form.Group
              controlId="exampleForm.SelectCustomSizeSm"
              // onChange={this.onChangetype.bind(this)}
            >
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
                <th>Email</th>
                <th>Title</th>
                <th>Type</th>
                <th>Description</th>
                {/* <th>Image</th> */}
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