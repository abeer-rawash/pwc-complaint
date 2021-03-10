import React from "react";

export default function Welcome() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg)",
        width: "100%",
        height: "694px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          paddingBottom: "80px",
          paddingTop: "60px",
          background: "white",
          borderRadius: "10px",
          border: "2px solid #4682B4E6",
        }}
      >
        <p
          style={{
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          Help us to know to help you
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          sign up here to help you
        </p>
        <button
          style={{
            width: "200px",
            height: "60px",
            borderRadius: "10px",
            marginTop: "20px",
            background: "#5083AD",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "#D6D6D6",
            }}
            href="/signupC"
          >
            Sign up
          </a>
        </button>
      </div>
    </div>
  );
}
