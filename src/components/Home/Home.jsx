import React from 'react';
import './Home.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React.JS Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1000
  });

  return (
    <>
      <div className="mainnav container-fluid">
        <div className="text-animation">
          <h1 className="innertext text-center text-white">
            Hi, I'm {" "}
            <span style={{ fontWeight: "bold", color: "yellow" }}>{text}</span>
            <Cursor />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
