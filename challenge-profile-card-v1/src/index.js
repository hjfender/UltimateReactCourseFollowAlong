import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
      <Skill skill="Python" emoji="😍" color="green" />
      <Skill skill="React" emoji="🙌" color="red" />
      <Skill skill="AWS" emoji="👌" color="orange" />
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
