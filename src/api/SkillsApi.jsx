import { useState, useEffect } from "react";
import "../styles/Skills.css";
function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-web-backend-cl1f.onrender.com/api/skills/")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="skills">
      <p>My Tech stack is made up of the following</p>
      <p>
        Basic computer skills in Word Processing,
        Ms-Excel and MS-access
      </p>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skills-card">
            <li>
              <ul>
                <img src={skill.image} />
              </ul>

              <ul>
                <p>{skill.name}</p>
              </ul>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
