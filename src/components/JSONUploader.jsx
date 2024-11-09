import React, { useState } from 'react'

const JSONUploader =({ onUpload }) => {
    const [input, setInput] = useState('');
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        try {
          const json = JSON.parse(content);
          onUpload(json);
        } catch (error) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    };
  
    const handleTextChange = (event) => {
      setInput(event.target.value);
    };
  
    const handleSubmit = () => {
      try {
        const json = JSON.parse(input);
        onUpload(json);
      } catch (error) {
        alert('Invalid JSON input');
      }
    };
  
    return (
      <div className="uploader">
        <input type="file" accept=".json" onChange={handleFileUpload} />
        <textarea
          rows="10"
          placeholder="Paste JSON here..."
          value={input}
          onChange={handleTextChange}
        />
        <button onClick={handleSubmit}>Visualize</button>
      </div>
    );
  };

export default JSONUploader
