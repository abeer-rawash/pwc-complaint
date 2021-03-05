import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  onChangeHandle(event) {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    this.onSubmit(this.state.value);
    this.handleSubmit(this.state.value);
  }
  validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!this.state.email) {
      emailError = "Email is required";
    }

    if (!this.state.password) {
      passwordError = "Password is required";
    }

    if (emailError || passwordError) {
      this.setState({
        emailError,
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
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/addUser/adduser", user)
      .then((res) => {
        window.location = "/login";
      })
      .catch((err) => alert("work on backend girl"));
  }

  render() {
    return (
      <div>
        <br />
        <div className="container text-center">
          <form className="text-center border border-light p-9">
            <h3 className="mb-3">Login</h3>
            <br />
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

            <input type="button" value="Login" onClick={this.handleClick} />
            <br></br>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    );
  }
}
