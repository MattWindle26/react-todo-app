
const Search = ({ setStatus }
) => {

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form action="">
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
 
export default Search;