import { React } from "react";

const Form = ({ 
    setInputText, 
    todos, 
    setTodos, 
    inputText, 
    setStatus,
    setAssignText,
    assignText
 }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };    
    const assignTextHandler = (e) => {
        setAssignText(e.target.value);
    };
    

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, assigned: assignText, completed: false, id: Math.random() * 1000 },
            // Gets all the todos and adds a new one to the todos array
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }


    

    return (
        <form class="addTodo" >
            <h2>Add todo</h2>
            <label >Task to add:</label>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
            <label >Assign task too:</label>
            <select name="assign" id="assign" onChange={assignTextHandler}>
                <option value="" defaultValue='selected disabled' >Assign too</option>
                <option value="Matt Windle">Matt Windle</option>
                <option value="Barry Tickle">Barry Tickle</option>
            </select>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                Add Task <i className="fas fa-plus"></i>
            </button>
            {/* <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div> */}
        </form>

    );
}

export default Form;
