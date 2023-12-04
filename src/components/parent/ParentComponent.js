import React, { useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import ContactForm from '../ContactForm';
import ContactPrint from '../ContactPrint';
import JobForm from '../JobForm';
import JobPrint from '../JobPrint';
import ExperienceForm from '../ExperienceForm';
import ExperiencePrint from '../ExperiencePrint';
import EducationForm from '../EducationForm';
import EducationPrint from '../EducationPrint';
import SkillForms from '../SkillForms';
import SkillPrint from '../SkillPrint';
import SummaryForm from '../SummaryForm';
import SummaryPrint from '../SummaryPrint';
//import TextAreaComponent from '../test/TextAreaComponent';
import FormulaireEnfant from '../test/TextAreaComponent';
import Print from '../test/Print';
//import '../style/formStyle.css'
import '../style/parentStyle.css'
import Resume from '../finalResume/Resume';
import LanguageForm from '../LanguageForm';
import InterestForm from '../InterestForm';

import TResume from '../test/TestResume';

//import '../../assets/css/pillar-1.css'
// test 2

import Work from '../test2/Works';
import ChildComponent from '../test2/ChildComponent';
import ChildPrint from '../test2/ChildPrint';

import SkillPrintTest from '../test2/SkillPrintTest';
import SkillTest from '../test2/SkillTest';


import TemplateSelector from '../ChosoeTemp/TemplateSelector ';
import CVBuilder from '../ChosoeTemp/CVBuider';

const ParentComponent = () => {
  const [contactValue, setFormContact] = useState({});
  const [jobValue, setFormJob] = useState({});
  const [workExpValue, setFormWorkExp] = useState([]);
  const [educationValue, setFormEducation] = useState({});
  const [skillValue, setFormSkill] = useState([]);
  const [summaryValue, setFormSummary] = useState({});
  const [languageValue, setLanguage] = useState([]);
  const [interestValue, setInterest] = useState ([]);
  const navigate = useNavigate();
  //const [formexp, setFormExp] = useState({ name: '', email: '', message: '' });




  //begin test
  const [skillTestValueTest, setFormskillTest] = useState([]);
  function handleFormSkillSubmitTest(values){
    setFormskillTest(values);
  };

  const [imgtest, setImg] = useState(null);
  function handleImg(values){
    setImg(values);
  };


  //end test








  const [child, setChild] = useState({});

  function handleFormContactSubmit(values){
    setFormContact(values);
  };
  function handleFormJobSubmit(values){
    setFormJob(values);
  };
  function handleFormWorkExpSubmit(textareas){
    setFormWorkExp(textareas);
  };
  function handleFormEducationSubmit(values){
    setFormEducation(values);
  };
  function handleFormSkillSubmit(values){
    setFormSkill(values);
  };
  function handleFormSummarySubmit(values){
    setFormSummary(values);
  };

  function handleInterest(value){
    setInterest(value)
  }

  const [submittedExpTextareas, setSubmittedTextareas] = useState([]);

  const handleExperienceTextAreaSubmit = (textareas) => {
    setSubmittedTextareas(textareas);
  };


  const [textareaValue, setTextareaValue] = useState('');
  const [champTexteValue, setChampTexteValue] = useState('');

  const handleSoumettres = (textareaValue, champTexteValue) => {
    setTextareaValue(textareaValue);
    setChampTexteValue(champTexteValue);
  };


  const [valeursSoumises, setValeursSoumises] = useState([]);

  const handleSoumettre = valeurs => {
    setValeursSoumises(valeurs);
  };



  const handleFormSubmit = (fields) => {
    setChild(fields)
    console.log("Liste des champs :", fields);
    // Faites quelque chose avec la liste des champs
  };


  const [formFields, setFormFields] = useState([]);

  const handleAdd = (fields) => {
    setFormFields([...formFields, fields]);
  };

  const handleRemove = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleLanguage = (value) => {
    setLanguage(value)
  }

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <Container>
      <div className='parent container'>
        <div className='parent-right col-md-10'>
          <div className='parent-right-header'>
              resume
          </div>
        <Routes>
          <Route path='/' element={<ContactForm onSubmit={handleFormContactSubmit}/>}/>
          
          <Route path='/job' element={<JobForm onSubmit={handleFormJobSubmit}/>}/>
          <Route path='/experience' element={<ExperienceForm onSubmit={handleFormWorkExpSubmit} onAdd={handleAdd} onRemove={handleRemove}/>}/>
          <Route path='/education' element={<EducationForm onSubmit={handleFormEducationSubmit}/>}/>
          <Route path='/skill' element={<SkillForms onSubmit={handleFormSkillSubmit}/>}/>
          <Route path='/summary' element={<SummaryForm onSubmit={handleFormSummarySubmit}/>}/>

          <Route path='/language' element={<LanguageForm onSubmit={handleLanguage}/>}/>
          <Route path='/interest' element={<InterestForm onSubmit={handleInterest}/>} />


           <Route path='/resume' element={<Resume con={contactValue} job={jobValue} exp={workExpValue} educ={educationValue} skill={skillValue} sum={summaryValue}  lang={languageValue} inte={interestValue}/>}/>


          
          <Route path='/test' element={<FormulaireEnfant onSubmit={handleSoumettre}/>}/>
          <Route path='/print' element={<Print value1={valeursSoumises}/>}/>
          <Route path='/tr' element={<TResume skillt={skillTestValueTest} con={contactValue} job={jobValue} exp={workExpValue} educ={educationValue} skill={skillValue} sum={summaryValue} />}/>



          <Route path='/testSkill' element={<SkillTest onSubmit={handleFormSkillSubmitTest}/>}/>
          <Route path='/testPrintSkill' element={<SkillPrintTest v={skillTestValueTest} />}/>


          <Route path='/work' element={<Work/>}/>
          <Route path='/et' element={<ChildComponent onAdd={handleAdd} onRemove={handleRemove} />}/>


          <Route path='/choose' element={<TemplateSelector onSelectTemplate={handleTemplateSelection}/>}/>
          <Route path='/cv' element={<CVBuilder selectedTemplate={selectedTemplate} />}/> 
        </Routes>
        </div>
        <div className='parent-left col-md-2'>
          <div className='parent-ancre '>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="Resume#contact" className='text-white lien'>Contact</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="Resume#job" className='text-white lien'>Experience</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="Resume#education" className='text-white lien'>Education</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="Resume#skill" className='text-white lien'>Skill</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="Resume#summary" className='text-white lien'>Summary</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="/resume" className='text-white lien'>resume</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="/cv" className='text-white lien'>cv</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="/choose" className='text-white lien'>choose cv</Link></h3>
                  </div>
                </div>
              </article>
            </div>

            <div className="resume-timeline position-relative">
              <article className='resume-timeline-item position-relative pb-4'>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1"><Link to="/tr" className='text-white lien'>test resume</Link></h3>
                  </div>
                </div>
              </article>
            </div>
            
            
            
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ParentComponent;