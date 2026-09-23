import { useState, useEffect } from "react";
import "../styles/Skills.css";
function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/skills/")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="skills">
      <p>
        The following are the programming languages and framework that i use in
        web development
      </p>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skills-card">
            <li key={skill.id}>
              <ul>
                <img src={skill.image} />
              </ul>

              <span>{skill.name}</span>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
