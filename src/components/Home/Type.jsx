import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
      <Typewriter
        options={{
          strings: [
            "Full-Stack Web Developer",
            "AI/ML Enthusiast",
            "DSA Solver"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    );
}

export default Type