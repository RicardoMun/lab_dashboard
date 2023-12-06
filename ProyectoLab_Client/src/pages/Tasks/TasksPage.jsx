import "./style.css";
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TaskList from "../../components/Tasks/TaskList";

import { useTasks } from "../../context/TaskContext";
import { useEffect } from "react";
import { Link } from 'react-router-dom'


const TasksPage = () => {

  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks.lenght === 0 && (
        <div className="container">
          <h1>Tasks Page</h1>
          <p>No hay tareas para mostrar</p>
          <p className='AddLink'>
            <Link
              to="/add-task"
              className="link"
            >
              Agregar Tarea
            </Link>
          </p>
        </div>
      )}

      <div className='container'>
        {/* <Navbar /> */}
        <h1>Tasks Page</h1>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Fecha de creación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task) => (
                <TaskList task={task} key={task._id} />
              ))
            }
          </tbody>
        </table>

        <p className='AddLink'>
          <Link
            to="/add-task"
            className="link"
          >
            Agregar Tarea
          </Link>
        </p>
      </div>
    </>

  )
}

export default TasksPage