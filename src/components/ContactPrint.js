import React from 'react'

function ContactPrint({values}) {
  return (
      <div>
      <p>First Name: {values.first_name}</p>
      <p>Last Name: {values.last_name}</p>
      <p>Email: {values.state}</p>
      <p>Email: {values.city}</p>
      <p>Email: {values.zip}</p>
      <p>Phone: {values.phone}</p>
      <p>Email: {values.email}</p>
    </div>
  )
}

export default ContactPrint
