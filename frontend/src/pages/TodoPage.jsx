import HandlingTodos from "../components/todos/HandlingTodos"
import "./scss/TodoPage.scss"

const TodoPage = () => {
    return(
        <div className="todoPage">
            <h1>Your Todos</h1>
            <HandlingTodos />
        </div>
    )
}

export default TodoPage