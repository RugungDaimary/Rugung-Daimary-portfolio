import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
      <Typewriter
        options={{
          strings: [
            "Full-Stack Web Developer",
            "Creative Problem Solver",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    );
}

export default Type