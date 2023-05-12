import React from 'react'

const Skill = () => {
    const skills = [
        "React",
        "Node.js",
        "JavaScript",
        "HTML",
        "CSS"
      ];
  return (
    <section>
        <h3>Skills</h3>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
  )
}

export default Skill