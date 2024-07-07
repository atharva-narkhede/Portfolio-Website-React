import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full-Stack Developer",
              "MERN Stack Developer",
              "Data Science Enthusiast",
              "JavaScript Developer",
              "Machine Learning Enthusiast"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 100,
          }}
        />
      )
}

export default Type
