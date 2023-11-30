import "./formStyle.css"
import Navbar from "../../components/Navbar/Navbar"
import { useForm } from "react-hook-form";
import { useTask } from "../../context/TaskContext";

function TasksFormPage() {

  const { register, handleSubmit } = useForm();
  const { tasks } = useTask(); //Extraer las tareas del context

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  })


  return (

    <div className="container">
      <Navbar />

      <div className="form">
        <h1 className="title">Tasks Form Page</h1>

        <form 
          onSubmit={onSubmit}
        >
          <label className="form-label">Tarea</label>
          <input 
            className="descriptionArea" 
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}   
          />

          <label className="form-label">Descripción</label>
          <textarea 
            placeholder="Description"
            className="descriptionArea"
            {...register("description", { required: true })}
          >

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
          >Crear tarea 
          </button>

        </form>


      </div>



    </div>
  )
}

export default TasksFormPage
