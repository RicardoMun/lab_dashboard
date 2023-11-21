import "./style.css"
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from '../../components/Navbar/Navbar';


function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate ();

    const onSubmit = (data) => signin(data);

    useEffect(() => {
        if (isAuthenticated) {
          navigate("/tasks");
        }
      }, [isAuthenticated]);

    return (
        
        <div className="container">
            <Navbar />
            <div className="form">
                {
                    /* Si se cambia por error.message se soluciona error que aparece 
                    al ingresar una contraseña más larga de 8 caracteres pero no se despliegan
                    los errores eb el form */
                    signinErrors.map((error, i) => {
                        return (
                            <div key={i} className="alertMessage">
                                {error} 
                            </div>
                        )

                    })
                }
                <h1 className="title">Inicio de sesión</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <label className="form-label">Correo</label>
                    <input
                        type="email" {...register("email", { required: true })}
                        className="form-control"
                    />
                    {errors.email && (
                        <span className="error">El correo es requerido</span>)
                    }

                    <label className="form-label">Contraseña</label>
                    <input
                        type="password" {...register("password", { required: true })}
                        className="form-control"
                    />
                    {errors.password && (
                        <span className="error">La contraseña es requerida</span>)
                    }


                    <button
                        type="submit"
                        className="sendButton"
                    >
                        Iniciar sesión
                    </button>

                </form>

                <p className="redirectLink">
                    No tienes una cuenta aún? {" "}
                    <Link 
                        to="/register"
                        className="link"
                    >Registrarse</Link>
                </p>
            </div>

        </div>
    )
}

export default LoginPage;