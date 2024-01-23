import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Python",
    level: "Advanced",
    color: "green",
  },
  {
    skill: "React",
    level: "Beginner",
    color: "red",
  },
  {
    skill: "AWS",
    level: "Intermediate",
    color: "orange",
  },
];

function Avatar() {
  return <img className="avatar" src="profile.JPG" alt="Henry Fender" />;
}

function Intro() {
  return (
    <div>
      <h1>Henry Fender</h1>
      <p>Data Engineer and AI Enthusiast at Capital One.</p>
    </div>
  );
}

function Skill({ skill, level, color }) {
  let emoji = "";
  if (level === "Advanced") {
    emoji = "😍";
  } else if (level === "Intermediate") {
    emoji = "🚶‍♂️";
  } else if (level === "Beginner") {
    emoji = "👶";
  }

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

function SkillList() {
  /*
    Use <Windows Key + .> or <Windows Key + ;> to pick an emoji on windows.
    On Mac use <CTRL + CMD + Space>
    */
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
