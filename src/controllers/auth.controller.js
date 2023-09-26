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

        await newUser.save()
        res.send("registrando")
    } catch (error) {
        console.log(error)
    }

};



export const login = (req, res) => { res.send('login') };