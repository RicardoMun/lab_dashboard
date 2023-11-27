import "./style.css"
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TermsAndConds from "../../components/TermsAndConditions/TermsAndConds";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";



function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    /* redirection when register */
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/tasks")
        }
    }, [isAuthenticated])


    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (

        <div className="container">
            <Navbar />
            <div className="form">
                {
                    RegisterErrors.map((error, i) => {
                        return (
                            <div key={i} className="alertMessage">
                                {error}
                            </div>
                        )

                    })
                }
                <h1 className="title">Registro</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <label className="form-label">Usuario</label>
                    <input
                        type="text" {...register("username", { required: true })}
                        className="form-control"
                    />
                    {errors.username && (
                        <span className="error">El nombre de usuario es requerido</span>)
                    }

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
                        Registrarse
                    </button>

                    <label className="form-label">
                        <input
                            type="checkbox"
                            /* onClick={checkboxHandler} */
                            {...register("terms", { required: true })}

                        />
                        Acepto los {" "}
                        <span className="terms" onClick={() => setIsModalOpen(true)}>
                            términos y condiciones
                        </span>
                    </label>

                    {isModalOpen && <TermsAndConds setOpen={setIsModalOpen} />}


                </form>

                <p className="redirectLink">
                    Ya tienes una cuenta? {" "}
                    <Link
                        to="/login"
                        className="link"
                    >Iniciar sesión</Link>
                </p>


            </div>

        </div>
    )
}

export default RegisterPage;