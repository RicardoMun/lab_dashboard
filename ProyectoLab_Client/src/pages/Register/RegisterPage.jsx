import "./style.css"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import TermsAndConds from "../../components/TermsAndConditions/TermsAndConds";
import {registerReqiest} from "../../api/auth.js"

function RegisterPage() {

    const { register, handleSubmit } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmit = handleSubmit(async(values) => {
        const res = await registerReqiest(values)
        console.log(res);
    })

    return (

        <div className="container">

            <div className="form">

                <form
                    onSubmit={onSubmit}
                >
                    <h1 className="title">Registro</h1>
                    <label className="form-label">Usuario</label>
                    <input
                        type="text" {...register("username", { required: true })}
                        className="form-control"
                    />
                    <label className="form-label">Correo</label>
                    <input
                        type="text" {...register("email", { required: true })}
                        className="form-control"
                    />
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password" {...register("password", { required: true })}
                        className="form-control"
                    />
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
            </div>

        </div>
    )
}

export default RegisterPage;