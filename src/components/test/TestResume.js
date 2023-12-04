import React, { useRef } from 'react';
import images from './profile.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
//import '../../assets/css/pillar-1.css';
//import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';
import html2pdf from 'html2pdf.js';
//import PDFComponent from './PDFComponent';


const TResume = ({skillt, con, job,exp, educ,skill, sum}) => {
	const componentRef = useRef(null);

	const handleDownloadPDF = () => {
		const element = componentRef.current;

		html2pdf()
		.set({ html2canvas: { scale: 2 } })
		.from(element)
		.save('component.pdf');
	};

  return (
	<div className='main-form'>
		<h1>Hello, World!</h1>
      	<button onClick={handleDownloadPDF}>Download PDF</button>
		<div ref={componentRef}>
			<article className="resume-wrapper text-center position-relative">
				<div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
					<header className="resume-header pt-4 pt-md-0 ">
						<div className="row  " >
							<div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
								<img className="picture"  src={images} alt=""/>
							</div>
							<div className="col">
								<div className="row p-4 justify-content-center justify-content-md-between">
									<div className="primary-info col-auto">
										<h1 className="name mt-0 mb-1 text-uppercase">{con.first_name} {con.last_name}</h1>
										<div className="title mb-3">{job.job_title}</div>
										<ul className="list-unstyled">
											<li className="mb-2"><a className="text-link" href="#"><i className="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>{con.email}</a></li>
											<li><a className="text-link" href="#"><i className="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>{con.phone}</a></li>
										</ul>
									</div>
									<div className="secondary-info col-auto mt-2">
										<ul className="resume-social list-unstyled">
											<li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/stevedoe</a></li>
											<li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-github-alt fa-fw"></i></span>github.com/username</a></li>
											<li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-codepen fa-fw"></i></span>codepen.io/username/</a></li>
											<li><a className="text-link" href="/"><span className="fa-container text-center me-2"><i className="fas fa-globe"></i></span>yourwebsite.com</a></li>
										</ul>
									</div>
								</div>
								
							</div>
						</div>
					</header>
					<div className="resume-body p-5">
						<section className="resume-section summary-section mb-5">
							<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
							<div className="resume-section-content">
								<p className="mb-0">{sum.summary}</p>
							</div>
						</section>
						<div className="row">
							<div className="col-lg-9">
								<section className="resume-section experience-section mb-5">
									<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
									<div className="resume-section-content">
										<div className="resume-timeline position-relative">
										
											{exp.map((fields, index) => (
												<article className="resume-timeline-item position-relative pb-5">
													<div key={index}>
														<div className="resume-timeline-item-header mb-2">
															<div className="d-flex flex-column flex-md-row">
																<h3 className="resume-position-title font-weight-bold mb-1">{fields.text}</h3>
																<div className="resume-company-name ms-auto">Startup Hub</div>
															</div>
															<div className="resume-position-time">2023 - Present</div>
															<div className="resume-timeline-item-desc">
															<p>{fields.textarea}</p>
															</div>
														</div>
													</div>
												</article>
											))}
											
										</div>
									</div>
								</section>
							</div>
							<div className="col-lg-3">
								<section className="resume-section skills-section mb-5">
									<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
									<div className="resume-section-content">
										<div className="resume-skill-item">
											{skill.map((fields, index) => (
												<div key={index}>
													<h4 className="resume-skills-cat font-weight-bold">{fields.text}</h4>
													<div className="progress resume-progress">
														<div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width:`${fields.per}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
											))}
										</div>
									</div>
								</section>
								<section className="resume-section education-section mb-5">
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
								<section className="resume-section language-section mb-5">
									<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
									<div className="resume-section-content">
										<ul className="list-unstyled resume-lang-list">
											<li className="mb-2"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Native)</small></li>
											<li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">French</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
											<li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
										</ul>
									</div>
								</section>
								<section className="resume-section interests-section mb-5">
									<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
									<div className="resume-section-content">
										<ul className="list-unstyled">
											<li className="mb-1">Climbing</li>
											<li className="mb-1">Snowboarding</li>
											<li className="mb-1">Cooking</li>
										</ul>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	</div>
	
  );
};

export default TResume;