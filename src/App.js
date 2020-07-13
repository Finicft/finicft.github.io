import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileInvoice,
} from "react-icons/fa";

import resume from "./assets/Resume_Fangting_Chen.pdf";
import Pic from "./Components/Picture";
import TimeLine from "./Components/Timeline";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </header>
      <body style={{ height: "100%", backgroundColor: "#DADBDF" }}>
        <Pic />
        <TimeLine />
        <h1 className="text-center mt-3 mb-5">Contact </h1>
        <div class="row">
          <div class="col-sm text-center">
            <a
              href="https://www.linkedin.com/in/fangting-chen-73114b1a0/"
              style={{ color: "#0e76a8" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2 ml-2" size={50} />
            </a>
            <a
              href="https://github.com/Finicft"
              style={{ color: "#211f1f" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 ml-2" size={50} />
            </a>
          </div>

          <div class="col-sm text-center">
            <div name="resume">
              <p>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <FaFileInvoice
                    className="mr-2 ml-2"
                    size={20}
                    style={{ color: "#211f1f" }}
                  />
                  <u>resume</u>
                </a>
              </p>
            </div>
            <div name="email">
              <p>
                <FaEnvelope className="mr-2 ml-2" size={20} />
                <em>
                  <u>fc1@ualberta.ca</u>
                </em>
              </p>
            </div>
            <div name="location">
              <p>
                <FaMapMarkerAlt className="mr-2 ml-2" size={20} />
                Edmonton, AB, Canada
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pb-4 mt-4">
          &copy; {new Date().getFullYear()} Fangting Chen
        </div>
      </body>
    </div>
  );
}

export default App;
