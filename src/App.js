
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Lists from "./components/Lists";
import './App.css'
function App() {

  const [InputText, setInputText] = useState("");
  const [Tasks, setTasks] = useState([]);
  const [Status, setStatus] = useState("All");
  const [filter, setFilter] = useState([]);




  // local storage
  useEffect(() => {
    getLocalStorage();
  }, []);



  const getLocalStorage = () => {
    if (localStorage.getItem("Tasks") === null) {
      localStorage.setItem("Tasks", JSON.stringify([]));
    } else {
      let toStorage = JSON.parse(localStorage.getItem("Tasks"));
      setTasks(toStorage);
    }
  }

  const ClearTasks = () => {
    localStorage.removeItem('Tasks');
    setTasks([]);
  }

  useEffect(
    () => {
      switch (Status) {
        case 'Completed':
          setFilter(Tasks.filter((task) => task.completed === true))
          break;

        case 'Uncompleted':
          setFilter(Tasks.filter((task) => task.completed === false))
          break;
        default:
          setFilter(Tasks);
          break;
      }
      localStorage.setItem("Tasks", JSON.stringify(Tasks));
    }, [Tasks, Status]
  );

  return (
    <div className="App">
      <Input InputText={InputText} setInputText={setInputText} Tasks={Tasks} setTasks={setTasks} setStatus={setStatus} />
      <Lists filter={filter} Tasks={Tasks} setTasks={setTasks} />
      {/* <h1>text: {InputText}</h1> */}

      <button onClick={ClearTasks}>Clear All Tasks!</button>
    </div>
  );
}

export default App;
