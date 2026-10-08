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
      <p>
        The following are the programming languages and framework that i use in
        web development
      </p>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id}  className="skills-card">
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
