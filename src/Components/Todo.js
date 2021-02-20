const Todo = ({text, todo, todos, setTodos}) => {


    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    } 
    const completeHander = () => {
        setTodos(todos.map( item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
    }
    return ( 
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : "" } ` }>{text} </li>
                <button className="complete-btn" onClick={completeHander}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            
        </div>
     );
}
 
export default Todo;