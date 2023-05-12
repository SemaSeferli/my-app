import React from 'react'

const Contact = () => {
  const email = "nagiyev.r883@gmail.com";
  const phone = "+99450 530 03 69";
  const address = "Azerbaycan,Baku,Bileceri qes.,A.Zeynalli kuc";

  return (
    <section>
    <h3>Contact</h3>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{address}</p>
    </section>
  )
}

export default Contact