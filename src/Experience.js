import React from 'react'

const Experience = () => {
    const experience = [
        {
          title: "Web Developer",
          company: "Dataline Corporation",
          dates: "2018 - 2019",
          description: "Developed and maintained web applications using React and Node.js."
        },
    ];
  return (
    <section>
    <h3>Experience</h3>
    {experience.map(exp => (
      <div key={exp.title}>
        <h4>{exp.title}</h4>
        <p>{exp.company}</p>
        <p>{exp.dates}</p>
        <p>{exp.description}</p>
      </div>
    ))}
  </section>
  )
}

export default Experience