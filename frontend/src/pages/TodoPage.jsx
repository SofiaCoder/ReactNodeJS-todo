import Todos from "../components/todos/Todos"
import { TodoForm } from "../components/Form/todoForm"
import "./scss/TodoPage.scss"
import { postTodo } from "../components/todos/functions/postTodo.js"

const TodoPage = () => {
    return(
        <div className="todoPage">
            <h1>Your Todos</h1>
            <TodoForm submitFunction={postTodo} btnText="Add"/>
            <Todos />
        </div>
    )
}

export default TodoPage