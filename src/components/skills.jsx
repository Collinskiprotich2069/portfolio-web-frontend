import React from "react";
import Skills from "../api/SkillsApi";

export const Skill = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <Skills />
      </div>
    </>
  );

  Skill.displayName = "Skill";
});


