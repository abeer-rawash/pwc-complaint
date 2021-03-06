import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

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
      emailError = "email is required";
    }

    if (!this.state.password) {
      passwordError = "password is required";
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
      .post("/app/logincustomer", user)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("email", user.email);
        window.location = "/home";
      })
      .catch((err) => alert("wrong email or password"));
  }

  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "450px",
          border: "2px solid #4682B4E6",
          padding: "50px 30px 30px 30px",
          margin: "7% 0% 0% 35%",
          borderRadius: "10px",
        }}
      >
        <Form>
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
              marginTop: "60px",
              marginLeft: "170px",
              color: "white",
              background: "#26468A",
              fontWeight: "bold",
            }}
            type="button"
            value="Login"
            onClick={this.handleClick}
          />
          <p
            style={{
              color: "#4682B4",
              marginTop: "50px",
              marginLeft: "100px",
            }}
          >
            Don't have an account?{" "}
            <a
              style={{
                color: "",
                textDecoration: "none",
                color: "#26468A",
              }}
              href="signupC"
            >
              sign up
            </a>{" "}
          </p>
        </Form>
      </div>
    );
  }
}
