import React from 'react';
import {useNavigate} from 'react-router-dom';

function Project({ title, description, filePath, sourceCode, techstack, showReadMore, navigateTo  }) {
    const navigate = useNavigate();
    const handleReadMore = () => {
        console.log('Read More Clicked');
        navigate(navigateTo);
    };

  return (
    <div className="project-container">
        <div className='project-image'>
            <img 
                src={filePath}
                width="100%"
                height="600px"
                style={{ border: 'none' }}
                title={title}
                ></img>
        </div>
        <div className= 'project-info'>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={sourceCode} target='"_blank'>View Source</a>
            <h2>{techstack}</h2>
            {showReadMore && (
                <button onClick={handleReadMore}>
                    Read More
                </button>
            )}
        </div>      
      </div>
    );
}
export default Project;