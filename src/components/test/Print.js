import React from 'react'
import './test.css'
function Print({value1}) {
  return (
    <div className='main'>
       <div>
        <h2>Valeurs soumises</h2>
        {value1.map((valeur, index) => (
          <p key={index}>{valeur}</p>
        ))}
      </div>
    </div>
  )
}

export default Print
