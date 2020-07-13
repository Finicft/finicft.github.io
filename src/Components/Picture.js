import React from "react";
import Image from "react-bootstrap/Image";
import me from "../assets/picture.JPG";
import "./Picture.css";

class Pic extends React.Component {
  render() {
    return (
      <div className="picture">
        <div className="intro p-3">
          <h1 className="mt-0 mb-0 ml-2 mr-2">Fangting Chen</h1>
          <h5 className="mt-0 ml-2 mr-2">
            Hi! I’m a fresh Computing Science graduate from the University of
            Alberta and seeking full-time job opportunities.
            <br />
            I’m passionate about software development and I love bringing
            innovative ideas to life. Well-versed in user-focused design; I’m
            eager to develop intuitive and user-friendly experiences.
          </h5>
        </div>

        <Image src={me} alt="picture of me" fluid />
      </div>
    );
  }
}

export default Pic;
