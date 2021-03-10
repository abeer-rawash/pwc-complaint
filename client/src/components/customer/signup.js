import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",

      firstnameError: "",
      lastnameError: "",
      phoneError: "",
      emailError: "",
      passwordError: "",
    };
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.onSubmit(this.state.value);
    this.handleSubmit(this.state.value);
  }
  validate = () => {
    let firstnameError = "";
    let lastnameError = "";
    let phoneError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.firstname) {
      firstnameError = "first name is required";
    }
    if (!this.state.lastname) {
      lastnameError = "last name is required";
    }
    if (!this.state.email) {
      emailError = "Email is required";
    }

    if (!this.state.phone) {
      phoneError = "phone number is required";
    }
    if (this.state.phone.match(/\D/g) || this.state.phone.length < 10) {
      phoneError = "invalid phone Number";
    }

    if (!this.state.password) {
      passwordError = "password is required";
    }

    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      phoneError ||
      passwordError
    ) {
      this.setState({
        firstnameError,
        lastnameError,
        emailError,
        phoneError,
        passwordError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };

  onSubmit() {
    const customer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/app/addcustomer", customer)
      .then((res) => {
        window.location = "/loginC";
      })
      .catch((err) => console.log("email already exists"));
  }

  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "650px",
          border: "2px solid #4682B4E6",
          padding: "30px 30px 30px 30px",
          margin: "2% 0% 0% 35%",

          borderRadius: "10px",
        }}
      >
        <b
          style={{
            marginLeft: "100px",
            paddingBottom: "30px",
            color: "#4682B4",
          }}
        >
          sign up as an Admin?
          <a
            style={{
              textDecoration: "none",
              color: "#26468A",
            }}
            href="/signupA"
          >
            {" "}
            sign up{" "}
          </a>{" "}
        </b>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <label
              style={{
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            >
              First Name
            </label>
            <input
              required={true}
              name="firstname"
              value={this.setState.firstname}
              onChange={this.onChangeHandle}
              type="text"
              className="form-control"
              style={{
                height: "40px",
              }}
              placeholder="Enter First Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div style={{ color: "red", fontSize: "15px" }}>
              {this.state.firstnameError}
            </div>
            <br></br>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <label
              style={{
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            >
              Last Name
            </label>
            <input
              required={true}
              className="form-control col"
              name="lastname"
              value={this.setState.lastname}
              onChange={this.onChangeHandle}
              placeholder="Enter Last Name"
              type="text"
              style={{
                height: "40px",
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div style={{ color: "red", fontSize: "15px" }}>
              {this.state.lastnameError}
            </div>
            <br></br>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <label
              style={{
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            >
              Phone No.
            </label>
            <input
              value={this.setState.phone}
              onChange={this.onChangeHandle}
              name="phone"
              placeholder="Enter Phone No."
              required={true}
              type="text"
              className="form-control"
              style={{
                height: "40px",
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div style={{ color: "red", fontSize: "15px" }}>
              {this.state.phoneError}
            </div>
            <br></br>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <label
              style={{
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            >
              E-mail
            </label>
            <input
              required={true}
              className="form-control col"
              name="email"
              value={this.setState.email}
              onChange={this.onChangeHandle}
              placeholder="Enter E-mail"
              type="text"
              style={{
                height: "40px",
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div style={{ color: "red", fontSize: "15px" }}>
              {this.state.emailError}
            </div>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <label
              style={{
                fontSize: "20px",
                paddingBottom: "5px",
                paddingTop: "20px",
              }}
            >
              Password
            </label>
            <input
              required={true}
              type="password"
              className="form-control col"
              name="password"
              value={this.setState.password}
              onChange={this.onChangeHandle}
              placeholder=" Enter Password"
              style={{
                height: "40px",
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div style={{ color: "red", fontSize: "15px" }}>
              {this.state.passwordError}
            </div>
          </Form.Group>
          <input
            style={{
              width: "100px",
              height: "40px",
              borderRadius: "10px",
              marginTop: "40px",
              marginLeft: "170px",
              color: "white",
              background: "#26468A",
              fontWeight: "bold",
            }}
            type="button"
            value="Sign up"
            onClick={this.handleClick}
          />
        </Form>
        <b
          style={{
            marginLeft: "100px",
            paddingBottom: "30px",
            color: "#4682B4",
          }}
        >
          Already have an account?
          <a
            style={{
              textDecoration: "none",
              color: "#26468A",
            }}
            href="/loginC"
          >
            {" "}
            login{" "}
          </a>{" "}
        </b>
      </div>
    );
  }
}
