/* relacionamos el auth.routes con el controlador */

import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import {createAccessToken} from "../libs/jwt.js";

export const register = async (req, res) => { 
    const {email, password, username, rol} = req.body

    try{

        /* Encriptación de la contraseñá */
        const passwordHashs = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            password: passwordHashs,
            username,
            rol
        })

        /* console.log(newUser); */
        /* Guardamos el usuario */
        const userSaved = await newUser.save()
        const token = await createAccessToken({id: userSaved._id})
        
        res.cookie("token", token)
        /* 
        Responde un solo mensaje
            res.json({
            message: "user saved successfully",
        }) */
        /* Envio al frontEnd y no enviío el password*/
        /* Si quiero mostrat todo el json paso userSaved */
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            username: userSaved.username,
            rol: userSaved.rol,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })
        /* res.send("registrando") */

    } catch (error) {
        /* console.log(error) */
        res.status(500).json({
            message: error.message || "Something goes wrong creating a user",
        })
    }

};

export const login = async (req, res) => { 
    const {email, password} = req.body

    try{

        const userFound = await User.findOne({email})

        if(!userFound) return res.status(400).json({message: "User not found"})

        /* Encriptación de la contraseñá */
        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json({message: "Invalid credentials"})

        const token = await createAccessToken({id: userFound._id})
        
        res.cookie("token", token)
        /* 
        Responde un solo mensaje
            res.json({
            message: "user saved successfully",
        }) */
        /* Envio al frontEnd y no enviío el password*/
        /* Si quiero mostrat todo el json paso userSaved */
        res.json({
            id: userFound._id,
            email: userFound.email,
            username: userFound.username,
            rol: userFound.rol,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
        /* res.send("registrando") */

    } catch (error) {
        /* console.log(error) */
        res.status(500).json({
            message: error.message || "Something goes wrong creating a user",
        })
    }

};

export const logout = async (req, res) => {

    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.json({message: "Logged out"})

}