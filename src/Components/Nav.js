import Search from "./Search";

const Nav = ({ completedTodos, setStatus, todos }) => {


    const showAdd = () => {
        document.querySelector(".addTodo").classList.toggle("show");
    }

    return ( 
        <div>
            <nav>
                <ul>
                    <li onClick={showAdd} >Add task</li>
                    <div>
                        <li>Completed: {completedTodos}</li>
                    </div>
                </ul>
            </nav>
            <div className="sub-nav">
                <h2>Todo list</h2>
                <a href="" className="btn">Sprint 37</a>
                <Search 
                    setStatus={setStatus}
                    todos={todos}
                />
            </div>
        </div>
     );
}
 
export default Nav;