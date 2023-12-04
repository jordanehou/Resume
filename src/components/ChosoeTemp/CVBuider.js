import React, { useState } from 'react';

const CVBuilder = ({ selectedTemplate }) => {
    const [cvData, setCVData] = useState({
      name: '',
      experience: '',
      skills: '',
      // Autres informations du CV
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCVData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logique pour générer le CV avec les données saisies et le template sélectionné
    };
  
    return (
      <div className='main-form'>
        <h2>CV Builder</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nom :
            <input type="text" name="name" value={cvData.name} onChange={handleInputChange} />
          </label>
          <label>
            Expérience :
            <textarea name="experience" value={cvData.experience} onChange={handleInputChange} />
          </label>
          <label>
            Compétences :
            <textarea name="skills" value={cvData.skills} onChange={handleInputChange} />
          </label>
          {/* Autres champs du CV */}
          <button type="submit">Générer le CV</button>
        </form>
        {selectedTemplate && (
          <div>
            <h3>Template sélectionné : {selectedTemplate}</h3>
            {/* Afficher le contenu spécifique au template sélectionné */}
          </div>
        )}
      </div>
    );
  };

  export default CVBuilder;