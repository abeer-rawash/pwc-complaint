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
      username: "",
      email: "",
      password: "",

      firstnameError: "",
      lastnameError: "",
      usernameError: "",
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
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.firstname) {
      firstnameError = "first name is required";
    }
    if (!this.state.lastname) {
      lastnameError = "last name is required";
    }
    if (!this.state.email) {
      emailError = "email is required";
    }

    if (!this.state.username) {
      usernameError = "username is required";
    }

    if (!this.state.password) {
      passwordError = "password is required";
    }

    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      usernameError ||
      passwordError
    ) {
      this.setState({
        firstnameError,
        lastnameError,
        emailError,
        usernameError,
        passwordError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    const isValid = this.validate();
    console.log(isValid, "isValid");
    if (isValid) {
      console.log(this.state);
    }
  };

  onSubmit() {
    const admin = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/app/addadmin", admin)
      .then((res) => {
        window.location = "/loginA";
      })
      .catch((err) => alert("email already exists"));
  }

  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "650px",
          border: "2px solid #9AB973",
          padding: "30px 30px 30px 30px",
          margin: "2% 0% 0% 35%",

          borderRadius: "10px",
        }}
      >
        <b
          style={{
            marginLeft: "100px",
            paddingBottom: "30px",
            color: "#84aa55",
          }}
        >
          sign up as a customer?
          <a
            style={{
              textDecoration: "none",
              color: "#4f6633",
            }}
            href="/signupC"
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
              class="form-control"
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
              class="form-control"
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
              Username
            </label>
            <input
              value={this.setState.username}
              onChange={this.onChangeHandle}
              name="username"
              placeholder="Enter Username"
              required={true}
              className="form-control col"
              onChange={this.onChangeHandle}
              type="text"
              class="form-control"
              style={{
                height: "40px",
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div style={{ color: "red", fontSize: "15px" }}>
              {this.state.usernameError}
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
              class="form-control"
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
              class="form-control"
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
              background: "#9AB973",
              fontWeight: "bold",
            }}
            type="button"
            value="Sign up"
            onClick={this.handleClick}
          />
        </Form>
      </div>
    );
  }
}
