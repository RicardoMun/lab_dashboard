import "./style.css"

import React, { useState } from 'react'
import logo from '/img/logoCVnav.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


function Navbar() {

    const [click, setClick] = useState(false)
    const { isAuthenticated, logout, user } = useAuth();
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#2E3092' }} />)
                        : (<FaBars size={30} style={{ color: '#2E3092' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>

                    {isAuthenticated ? (
                        <>
                            <li className='nav-item'>
                                <Link to='/tasks' onClick={closeMenu}>Tareas</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/' onClick={closeMenu}>Usuarios</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/' onClick={closeMenu}>Contenido</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/' onClick={closeMenu}>Algo más</Link>
                            </li>

                            <li className='nav-item'>
                                ¡Bienvenido! <b>{user.username}</b>
                            </li>

                            <li>
                                <button className="logoutButton">
                                    <Link to="/" onClick={() => logout()}>
                                        Cerrar Sesión
                                    </Link>
                                </button>
                            </li>


                        </>
                    ) : (
                        <>
                            <li className='nav-item'>
                                <Link to='/' onClick={closeMenu}>Contactos</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='#aboutUsSection'>Sobre de nosotros</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='#aboutUsSection'>Encuentranos</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='#aboutUsSection'>Reserva</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/login" className="linkP">Iniciar Sesión</Link>
                            </li>
                        </>
                    )}
                </ul>




            </nav>
        </div>
    )
}

export default Navbar
