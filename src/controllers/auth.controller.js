/* relacionamos el auth.routes con el controlador */

import User from "../models/user.model.js";

export const register = async (req, res) => { 
    const {email, password, username, rol} = req.body

    try{
        const newUser = new User({
            email,
            password,
            username,
            rol
        })

        /* console.log(newUser); */
        const userSaved = await newUser.save()
        /* Envio al frontEnd */
        res.json(userSaved)
        /* res.send("registrando") */

    } catch (error) {
        console.log(error)
    }

};



export const login = (req, res) => { res.send('login') };