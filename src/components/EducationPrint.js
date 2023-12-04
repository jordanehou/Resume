import React from 'react'

function EducationPrint({values}) {
  return (
    <div>
      <p>School name: {values.school_name}</p>
      <p>School location: {values.school_location}</p>
      <p>Degree: {values.degree}</p>
      <p>Field Study: {values.field_study}</p>
      <p>Graduation Year: {values.graduation_year}</p>
    </div>
  )
}

export default EducationPrint
