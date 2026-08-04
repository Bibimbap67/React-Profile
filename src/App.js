import "./App.css";
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { JavaOutlined } from "@ant-design/icons";
import yeji from "./assets/yeji.png";
import yunjin from "./assets/funny-yunjin.gif";
import speed from "./assets/speed.gif";
import Information from "./components/information";



function App() {
  const techStack = [
    { icon: <FaReact />, name: "React", color: "#0f1bc9" },
    { icon: <JavaOutlined />, name: "JavaScript", color: "#ef770e" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#438841" },
    { icon: <SiAndroidstudio />, name: "Android Studio", color: "#5fa04e" },
    { icon: <FaPython />, name: "Python", color: "#3C7BAC" },
  ];

  return (
    <Information
    name="Mark lester M. Panolin"
    role="BSIT Students"
    bio={"I love making simple things complicated, and complicated things to simple lol. \n– Bibimbap"}
    profileImage={yunjin}
    skills={techStack}
    />
  );
}

export default App;
