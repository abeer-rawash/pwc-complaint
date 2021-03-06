import React, { Component } from "react";
import axios from "axios";

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
      <div>
        <br />
        <div className="container text-center">
          <form className="text-center border border-light p-9">
            <b>
              sign up as a customer?<a href="/signupC"> sign up </a>
            </b>
            <br />
            <div className="col">
              <label> First Name </label>
              <br></br>
              <input
                required={true}
                type="text"
                className="form-control col"
                name="firstname"
                value={this.setState.firstname}
                onChange={this.onChangeHandle}
                placeholder="First Name"
              />
              <div style={{ color: "red" }}>{this.state.firstnameError}</div>
              <br></br>
            </div>
            <div className="col">
              <label> Last Name </label>
              <br></br>
              <input
                required={true}
                type="text"
                className="form-control col"
                name="lastname"
                value={this.setState.lastname}
                onChange={this.onChangeHandle}
                placeholder="Last Name"
              />
              <div style={{ color: "red" }}>{this.state.lastnameError}</div>
              <br></br>
            </div>
            <div className="col">
              <label> Username </label>
              <br></br>
              <input
                required={true}
                className="form-control col"
                value={this.setState.username}
                onChange={this.onChangeHandle}
                name="username"
                placeholder="username Number"
              />
              <div style={{ color: "red" }}>{this.state.usernameError}</div>
              <br></br>
            </div>
            <div className="col">
              <label> E-mail </label>
              <br></br>
              <input
                required={true}
                type="text"
                className="form-control col"
                name="email"
                value={this.setState.email}
                onChange={this.onChangeHandle}
                placeholder="E-mail"
              />
              <div style={{ color: "red" }}>{this.state.emailError}</div>
              <br></br>
            </div>
            <div className="col">
              <label> Password </label>
              <br></br>
              <input
                required={true}
                type="password"
                className="form-control col"
                name="password"
                value={this.setState.password}
                onChange={this.onChangeHandle}
                placeholder="Password"
              />
              <div style={{ color: "red" }}>{this.state.passwordError}</div>
              <br></br>
            </div>

            <input type="button" value="Sign up" onClick={this.handleClick} />
            <br></br>
            <br></br>
            <b>
              have an account?<a href="/loginA"> Login </a>
            </b>
            <br></br>
          </form>
        </div>
      </div>
    );
  }
}
