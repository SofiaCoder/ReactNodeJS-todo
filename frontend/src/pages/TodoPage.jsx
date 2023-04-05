import Todos from "../components/todos/Todos"
import { TodoForm } from "../components/Form/TodoForm"
import "./scss/TodoPage.scss"
import { postTodo } from "../components/todos/functions/postTodo.js"

const TodoPage = () => {
    const user = localStorage.getItem('username')
    return(
        <div className="todoPage">
            <h1>{user}'s Todos</h1>
            <TodoForm submitFunction={postTodo} btnText="Add"/>
            <Todos />
        </div>
    )
}

export default TodoPage