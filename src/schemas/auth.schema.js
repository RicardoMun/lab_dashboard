import z from 'zod';

export const registerSchema = z.object({
    email: z.string({
        required_error: "El correo es requerido",
    }).email({
        message: "Correo invalido",
    }),

    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(8, {
        message: "La contraseña debe tener al menos 8 caracteres"
    }),

    username: z.string({
        required_error: "El nombre de usuario es requerido",
    }),

    rol: z.string().optional(),


})


export const loginSchema = z.object({
    email: z.string({
        required_error: "El correo es requerido",
    }).email({
        message: "Correo invalido"
    }),

    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(8, {
        message: "La contraseña debe tener al menos 8 caracteres"
    }),

})