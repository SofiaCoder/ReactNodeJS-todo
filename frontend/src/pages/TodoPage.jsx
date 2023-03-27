import Todos from "../components/todos/Todos"
import TodoForm from "../components/todos/TodoForm"
import "./scss/TodoPage.scss"

const TodoPage = () => {
    return(
        <div className="todoPage">
            <h1>Your Todos</h1>
            <TodoForm />
            <Todos />
        </div>
    )
}

export default TodoPage