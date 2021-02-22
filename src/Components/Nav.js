const Nav = ({ completedTodos }) => {
    return ( 
        <div>
            <nav>
                <ul>
                    <li>Add task</li>
                    <li>Completed: {completedTodos}</li>
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