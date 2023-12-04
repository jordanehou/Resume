import React, {useRef} from 'react';
//import images from './profile.jpg';
import test from './test.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/pillar-1.css';
import '../style/formStyle.css'
import { Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';


const Resume = ({con, job,exp, educ, skill, sum, lang, inte}) => {
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
		<div ref={componentRef}>
			<article className="resume-wrapper text-center position-relative">
				<div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
					<Link to='/' className='resume-part '>
						<header className="resume-header pt-4 pt-md-0 resume-part-border">
							<div className="row" >
								<div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
									{con.image? <img className="picture" style={{height:'220px', width:'235px'}} src={URL.createObjectURL(con.image)} alt="" /> :'' }
								</div>
								<div className="col">
									<div className="row p-4 justify-content-center justify-content-md-between" id='contact'>
										<div className="primary-info col-auto resume-part">
											<h1 className="name mt-0 mb-1 text-capitalize">{con.first_name} {con.last_name}</h1>
											<div className="title mb-2">{con.role}</div>
											<ul className="list-unstyled">
												<li className="mb-2"><a className="text-link resume-part" href="#"><i className="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>{con.email}</a></li>
												<li><a className="text-link resume-part" href="#"><i className="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>{con.phone}</a></li>
											</ul>
										</div>
										<div className="secondary-info col-auto mt-2">
											<ul className="resume-social list-unstyled">
												
											</ul>
										</div>
									</div>
									
								</div>
							</div>
						</header>
					</Link>

					<div className="resume-body p-5">
						<Link to='/summary' className='resume-part'>
							<section className="resume-section summary-section mb-5 resume-part-border" id='summary'>
								<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
								<div className="resume-section-content">
									<p className="mb-0">{sum.summary}</p>
								</div>
							</section>
						</Link>
						<div className="row">
							<div className="col-lg-9">
								<Link to='/experience' className='resume-part'>
									<section className="resume-section experience-section mb-5 resume-part-border" id='job'>
										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
										<div className="resume-section-content">
											<div className="resume-timeline position-relative">
											
												{exp.map((fields, index) => (
													<article className="resume-timeline-item position-relative pb-5">
														<div key={index}>
															<div className="resume-timeline-item-header mb-2">
																<div className="d-flex flex-column flex-md-row">
																	<h3 className="resume-position-title font-weight-bold mb-1">{fields.position}</h3>
																	<div className="resume-company-name ms-auto">{fields.company}</div>
																</div>
																<div className="resume-position-time">{fields.start_date_year} - {fields.current ? 'Current' : fields.end_date_year}</div>
																
																<div className="resume-timeline-item-desc resume-section-content">
																	<p>{fields.textarea}</p>
																</div>
															</div>
														</div>
													</article>
												))}
												
											</div>
										</div>
									</section>
								</Link>
							</div>
							<div className="col-lg-3">
								<Link to='/skill' className='resume-part'>
									<section className="resume-section skills-section mb-5 resume-part-border" id='skill'>
										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills</h2>
										<div className="resume-section-content">
											<div className="resume-skill-item">
												{skill.map((fields, index) => (
													<div key={index}>
														<h4 className="resume-skills-cat font-weight-bold text-capitalize">{fields.text}</h4>
														<div className="progress resume-progress">
															<div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width:`${fields.per}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
												))}
											</div>
										</div>
									</section>
								</Link>
								<Link to='/education' className='resume-part'>
									<section className="resume-section education-section mb-5 resume-part-border" id='education'>
										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
										<div className="resume-section-content">
											<ul className="list-unstyled">
												<li className="mb-2">
													<div className="resume-degree font-weight-bold">{educ.degree}</div>
													<div className="resume-degree-org">{educ.school_name}</div>
													<div className="resume-degree-time">{educ.graduation_year}</div>
												</li>
											</ul>
										</div>
									</section>
								</Link>
								<Link to='/language' className='resume-part'>
									<section className="resume-section language-section mb-5 resume-part-border" id='language'>
										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
										<div className="resume-section-content">
											<ul className="list-unstyled resume-lang-list">
												{lang.map((fields, index) =>(
													<div key={index}>
														<li className="mb-2 text-capitalize"><span className="resume-lang-name font-weight-bold">{fields.language}</span>
															<span class="ms-1 badge badge-light">{fields.level}</span>
														</li>
													</div>
												))}
											</ul>
										</div>
									</section>
								</Link>

								<Link to='/interest' className='resume-part'>
									<section className="resume-section interests-section mb-5 resume-part-border" id='interest'>
										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
										<div className="resume-section-content">
											<ul className="list-unstyled">
												{inte.map((fields, index) =>(
													<div key={index}>
														<li className="mb-1 text-capitalize">{fields.interest}</li>
													</div>
												))}
											</ul>
										</div>
									</section>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
		<div className='mt-2 mb-4 me-3 text-end'>
			<button onClick={handleDownloadPDF} style={{backgroundColor:'#1E4E70', color:'white'}} className='me-4 btn btn-lg btn-block' >Download PDF</button>
		</div>
	</div>
  );
};

export default Resume;