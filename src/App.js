
import React, { useState } from "react";
import Input from "./components/Input";
import Lists from "./components/Lists";
function App() {
  const [InputText, setInputText] = useState("");
  const [Tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Input InputText={InputText} setInputText={setInputText} Tasks={Tasks} setTasks={setTasks} />
      <Lists Tasks={Tasks} setTasks={setTasks} />
      <h1>text: {InputText}</h1>
    </div>
  );
}

export default App;
