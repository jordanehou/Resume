import React from 'react'

function JobPrint({values}) {
  return (
    <div>
      <p>Job title: {values.job_title}</p>
      <p>Employer: {values.employer}</p>
      <p>city: {values.city}</p>
      <p>state: {values.state}</p>
      <p>start: {values.start_date_year}</p>
      <p>end: {values.end_date_year}</p>
    </div>
  )
}

export default JobPrint
