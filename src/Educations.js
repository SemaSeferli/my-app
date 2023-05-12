import React from 'react'

const Educations = () => {
    const education = [
        {
          degree: "Bachelor of Information texnologies",
          school: "Azerbaijan Technichal University",
          graduation: "2019-2023"
        }
      ];
  return (
    <section>
    <h3>Education</h3>
    {education.map(edu => (
      <div key={edu.degree}>
        <h4>{edu.degree}</h4>
        <p>{edu.school}</p>
        <p>{edu.graduation}</p>
      </div>
    ))}
  </section>
  )
}

export default Educations