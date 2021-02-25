import Search from "./Search";

const Nav = ({ completedTodos, setStatus }) => {


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
                />
            </div>
        </div>
     );
}
 
export default Nav;