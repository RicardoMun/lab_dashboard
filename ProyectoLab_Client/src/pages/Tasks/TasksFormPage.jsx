import "./formStyle.css"
import Navbar from "../../components/Navbar/Navbar"
import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TaskContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TasksFormPage() {

  /* const { tasks } = useTask(); */ //Extraer las tareas del context
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try{
      if (params.id) {
        updateTask(params.id, data);
      } else {
        createTask(data);
      }
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    };
    loadTask();
  }, []);


  return (

    <div className="container">
      {/* <Navbar /> */}

      <div className="form">
        <h1 className="title">Agregar una nueva tarea</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            type="text"
            placeholder="Titulo"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="error">Por favor ingrese un titulo</span>
          )}

          <label className="form-label">Descripción</label>
          <textarea
            placeholder="Descripción"
            className="form-control"
            {...register("description", { required: true })}
          >
            {errors.description && (
              <span className="error">Por favor ingrese una descripción</span>
            )}

          </textarea>

          <label className="form-label">Estado de la tarea</label>
          <div className="radioGroup">
            <div>
              <input
                type="radio"
                value="done"
                name="status"
              />
              Hecha
            </div>
            <div>
              <input
                type="radio"
                value="notDone"
                name="status"
              />
              Por hacer
            </div>
          </div>

          <button
            className="sendButton"
            type="submit"
          >
            Guardar
          </button>

        </form>


      </div>



    </div>
  )
}

export default TasksFormPage
