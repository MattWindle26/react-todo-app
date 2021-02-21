import { React } from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 },
            // Gets all the todos and adds a new one to the todos array
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    

    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}

export default Form;
