import "./style.css";

import { useTasks } from "../../context/TaskContext";
import { Link } from "react-router-dom";

function TaskList({ task }) {

    const { deleteTask } = useTasks();

    return (
        <tr>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{new Date(task.date).toLocaleDateString()}</td>
            <td> 
                <button className='editButton'>
                    <Link
                        to={`/tasks/${task._id}`}
                        className="link"
                    >
                        Editar
                    </Link>
                </button>

                <button 
                    className='deleteButton'
                    onClick={() => deleteTask(task._id)}
                >
                    <Link
                        to={`/tasks`}
                        className="link"
                    >
                        Eliminar
                    </Link>
                </button>
            </td>
        </tr>
    )
}

export default TaskList;