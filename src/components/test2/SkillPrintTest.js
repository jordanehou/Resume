import React from 'react'

function SkillPrintTest({v}) {
  return (
    <div className='main-form'>
        {v.map((fields, index) => (
                                <div key={index}>
                                    <p>Élément {index + 1} :</p>
                                    <div class="resume-timeline-item-header mb-2">
                                    <div class="d-flex flex-column flex-md-row">
                                        <h3 class="resume-position-title font-weight-bold mb-1">{fields.text}</h3>
                                        <div class="resume-company-name ms-auto">Startup Hub</div>
                                    </div>
                                    <div class="resume-position-time">2023 - Present</div>
                                    <div class="resume-timeline-item-desc">
                                        <p>{fields.per}</p>
                                    </div>
                                    </div>
                                </div>
                                ))}
    </div>
  )
}

export default SkillPrintTest
