import { useState, useEffect } from "react";
import './App.css';
import Form from "./Components/Form";
import Nav from "./Components/Nav";
import TodoList from "./Components/TodoList";


function App() {


  let uncompletedTodos;

  const [inputText, setInputText] = useState("");
  const [assignText, setAssignText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState("0");

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    countTodos();  
  }, [todos,status]);

const countTodos = () => {
  setcompletedTodos(todos.filter(todo => todo.completed === true).length);
}

const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
    case 'uncompleted': 
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
    default: 
      setFilteredTodos(todos);
      break;
  }
}

const saveLocalTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}
const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal);
    console.log("Todos set");
  }
}

  return (
    <div className="App">
      <Nav 
        completedTodos={completedTodos}
        setStatus={setStatus}
        todos={todos}
      />
      <Form 
        todos={todos}
        inputText={inputText} 
        setTodos={setTodos} 
        setInputText={setInputText}
        assignText={assignText}
        setAssignText={setAssignText}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
