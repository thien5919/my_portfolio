import React from 'react';


function Certificate({ title, filePath }) {
  return (
    <div className="certificate-container">
      <h3>{title}</h3>
      <img
        src={filePath}
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title={title}
      ></img>
    </div>
  );
}

export default Certificate;
