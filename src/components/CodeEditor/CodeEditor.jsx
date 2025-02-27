import React, { useState } from "react";
import "./CodeEditor.css";

function CodeEditor({ onCodeSubmit }) {
  const [code, setCode] = useState("// Write your code here\n");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCodeSubmit(code);
  };

  return (
    <div className="code-editor">
      <h2>Code Editor</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={handleChange}
          rows="10"
          cols="50"
          placeholder="Enter your code here..."
        />
        <br />
        <button type="submit">Submit Code</button>
      </form>
    </div>
  );
}

export default CodeEditor;