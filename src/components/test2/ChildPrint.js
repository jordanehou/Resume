import React from 'react'

function ChildPrint({value}) {
  return (
    <div>
        {value.map((fields, index) => (
          <div key={index}>
            <p>Élément {index + 1} :</p>
            <p>Champ texte : {fields[0].text}</p>
            <p>Textarea : {fields[0].textarea}</p>
          </div>
        ))}
      </div>
  )
}

export default ChildPrint
