import logo from "./logo.svg";
import "./App.css";
import JSONUploader from "./components/JSONUploader";
import JSONTree from "./components/JSONTree";
import { useState } from "react";
function App() {
  const [jsonData, setJsonData] = useState(null);

  const handleJSONUpload = (data) => {
    setJsonData(data);
  };

  return (
    <div className="app">
      <h1>JSON Visualizer</h1>
      <JSONUploader onUpload={handleJSONUpload} />
      {jsonData && <JSONTree data={jsonData} />}
    </div>
  );
}

export default App;
