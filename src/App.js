import "./App.css";
import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { JavaOutlined } from "@ant-design/icons";
import winter from "./assets/winter.png";
import scuba from "./assets/winter-scuba.gif";
import Information from "./components/information";
import { Analytics } from "@vercel/analytics/react"



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
      name="김민정"
      role="AESPA - Vocals"
      bio={"나는 쉬운 걸 어렵게 만들고, 어려운 걸 쉽게 만드는 걸 좋아해 ㅋㅋ\n– Bibimbap"}
      profileImage={winter}
      hoverImage={scuba}
      skills={techStack}
    />
  );
}

export default App;