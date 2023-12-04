import React from 'react'
import './resume.css'
import './style.js'
function Resume({con, job, value, educ, skill, sum}) {
  return (
    <div className='block-resume'>
        <div className='resume-main-title'>
            <h2 className=''>Your final resume</h2>
        </div>
        <div className='res-main'>
            <div className='res-main-2'>

            
            <div className='res-left' id='div1'>
                <div className='block_contact' id='contact'>
                    <div className='block_title'>
                        <h2>Contact</h2>
                    </div> 
                    <div className='block_contact_info'>
                        <p>{con.email}</p>
                        <p>{con.phone}</p>
                        <p>{con.state}, {con.city} {con.zip}</p>
                        <img src={con.image} alt='pp'/>
                    </div>
                </div>
                <div className='block_skill' id='skill'>
                    <div className='block_title'>
                        <h2 >Skill</h2>
                    </div>
                    <div className='block_skill_info'>
                        {skill.skill}
                    </div>
                </div>
            </div>
            <div className='res-right' id='div2'>
                <div className='block_name'>
                    <p className='text-capitalize'>{con.first_name} {con.last_name}</p>
                </div>
                <div className='block_sum' id='summary'>
                    <div className='block_title'>
                        <h2 >Summary</h2>
                    </div>
                    <div className='block_sum_info'>
                        {sum.summary}
                    </div>
                </div>
                

                <div className='block_job' id='job'>
                    <div className='block_title'>
                        <h2>Work Experiences</h2>
                    </div>
                    <div className='block_job_part'>
                        <div className='block_job_left  float-start'>
                            {job.job_title}<br/>
                            {job.employer}
                        </div>
                        <div className='block_job_right  float-end'>
                            {job.start_date_year}-Present <br/>
                            {job.city}, {job.state}
                        </div>
                    </div>
                    
                    <div className='block_job_exp'>
                        <div>
                            <div>
                            {value.length > 0 && (
                                <div>
                                <ul className='text-justify'>
                                    {value.map((fields, index) => (

                                    <div key={index}>
                                        <p key={index}>Élément {index + 1} :</p>
                                        <p key={index}>Champ texte : {fields.text}</p>
                                        <p key={index}>Textarea : {fields.textarea}</p>
                                        
                                    
                                    </div>
                                    ))}
                                </ul>
                                </div>
                            )}

                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block_educ' id='education'>
                    <div className='block_title'>
                        <h2>Education</h2>
                    </div>
                    <div className='block_educ_left'>
                        {educ.degree}:{educ.field_study} <br/>
                        {educ.school_name}:{educ.school_location}
                    </div>
                    <div className='block_educ_right'>
                        {educ.graduation_year} ll
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
