import React, {useRef} from 'react';
//import images from './profile.jpg';
//import test from './test.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../assets/css/orbit-1.css';
import '../../style/formStyle.css'
import { Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';


function ResumeTmp2({con, job,exp, educ, skill, sum, lang, inte}) {
    const componentRef = useRef(null);

	const handleDownloadPDF = () => {
		const element = componentRef.current;

		html2pdf()
		.set({ html2canvas: { scale: 2 } })
		.from(element)
		.save('Resume.pdf');
	};
  return (
    <div className='main-form'>
        <div className='mt-3 mb-3'>
            <h2>Your Resume</h2>
        </div>
        <div className="wrapper  shadow-lg" ref={componentRef}>
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    {con.image? <img className="profile rounded-circle" style={{height:'110px', width:'100px'}} src={URL.createObjectURL(con.image)} alt="" /> :'' }
                    <h2 className="name">{con.first_name}{' '}{con.last_name}</h2>
                    <h3 className="tagline">{con.role}</h3>
                </div>
                
                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i class="bi bi-envelope me-1"></i><a href="mailto: yourname@email.com">{con.email}</a></li>
                        <li className="phone"><i className="bi bi-phone me-1"></i><a href="tel:0123 456 789">{con.phone}</a></li>
                        <li className="website"><i className="bi bi-globe me-1"></i><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">portfoliosite.com</a></li>
                        <li className="linkedin"><i className="fa-brands fa-linkedin-in"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
                        <li className="github"><i className="fa-brands fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
                        <li className="twitter"><i className="fa-brands fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    <div className="item">
                        <h4 className="degree">{educ.degree}</h4>
                        <h5 className="meta">{educ.school_name}</h5>
                            <div className="time">{educ.graduation_year}</div>
                    </div>
                </div>
                
                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">

                        {lang.map((fields, index) =>(
                            <div key={index}>
                                <li><span className='me-1'>{fields.language}</span>
                                    <span className="lang-desc">{fields.level}</span>
                                </li>
                            </div>
                        ))}

                    </ul>
                </div>
                
                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        {inte.map((fields, index) =>(
                            <div key={index}>
                                <li className="me-1 text-capitalize">{fields.interest}</li>
                            </div>
                        ))}
                    </ul>
                </div>
                
            </div>
            
            <div className="main-wrapper">
                
                <section className="section summary-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="bi bi-person-fill"></i></span>Career Profile</h2>
                    <div className="summary">
                        <p>{sum.summary}</p>
                    </div>
                </section>
                
                <section className="section experiences-section">
                    <h2 className="section-title"><span className="icon-holder"><i className="bi bi-briefcase"></i></span>Experiences</h2>
                    {exp.map((fields, index) => (
                        <div className="item" key={index}>
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">{fields.position}</h3>
                                    <div className="time">{fields.start_date_year} - {fields.current ? 'Present' : fields.end_date_year}</div>
                                </div>
                                <div className="company">{fields.company}</div>
                            </div>
                            <div className="details">
                                <p>{fields.textarea}</p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="skills-section section">
                    <h2 class="section-title"><span class="icon-holder"><i class="bi bi-rocket"></i></span>Skills &amp; Proficiency</h2>
                    <div className="skillset">

                        {skill.map((fields, index) => (
                            <div className='item' key={index}>
                                <h3 className="level-title">{fields.text}</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width:`${fields.per}%`}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </div>
        </div>
        <div className='mt-2 mb-4 me-3 text-end'>
			<button onClick={handleDownloadPDF} style={{backgroundColor:'#1E4E70', color:'white'}} className='me-4 btn btn-lg btn-block' >Download PDF</button>
		</div>
    </div>
  )
}

export default ResumeTmp2
