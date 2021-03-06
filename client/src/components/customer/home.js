import React from "react";
import Navbar from "./nav";

function Home() {
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
      <Navbar />
      <div
        style={{
          textAlign: "center",
          marginTop: "170px",
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
          give us a complaint <span>to give you satisfaction</span>
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
            href="/addcomp"
          >
            Add Complaint
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
