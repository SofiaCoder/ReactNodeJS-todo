import "./todoBox.scss"

const TodoBox = ({props}) => {
    return(
        <div className="todoBox">
            <h3>{props.task}</h3>
            <p>{props.text}</p>
            <p>{props.value}</p>
        </div>
    )
}

export default TodoBox