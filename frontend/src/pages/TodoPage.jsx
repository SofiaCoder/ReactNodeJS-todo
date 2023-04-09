import Todos from "../components/todos/Todos"
import { TodoForm } from "../components/Form/TodoForm"
import "./scss/TodoPage.scss"
import { postTodo } from "../components/todos/functions/postTodo.js"
import { FriendPage } from "./FriendPage"


const TodoPage = () => {
    const user = localStorage.getItem('username')
    return(
        <div className="todoPage">
            <h1>{user}'s Todos</h1>
            <TodoForm className="todoForm" submitFunction={postTodo} btnText="Add"/>
            <Todos className="todos" />
            <FriendPage className="friendPage" />
        </div>
    )
}

export default TodoPage