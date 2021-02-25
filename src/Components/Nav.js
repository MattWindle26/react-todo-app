const Nav = ({ completedTodos }) => {


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
            </div>
        </div>
     );
}
 
export default Nav;