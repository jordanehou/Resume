{submittedExpTextareas.length > 0 && (
    <div>
    <ul className='text-justify'>
        {submittedExpTextareas.map((text, index) => (
        <li key={index}>{text}</li>
        
        ))}
    </ul>
    </div>
)}
