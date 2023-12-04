import React from 'react'
import { useNavigate } from 'react-router-dom';

function TemplateSelector ({ onSelectTemplate }) {
    const nav = useNavigate()
    const handleTemplateSelection = (template) => {
        onSelectTemplate(template);
        nav('/contact')
    };

    return (
    <div className='main-form'>
        <h2>Choisissez un template :</h2>
        <button onClick={() => handleTemplateSelection('1')}>Template 1</button>
        <button onClick={() => handleTemplateSelection('2')}>Template 2</button>
    </div>
    );
}

export default TemplateSelector;

