import "./style.css"
import React from 'react'
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#about'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#testimonials'>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#demo'>Demo</Link>
                    </li>
                </ul>
                
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2020 Execute, Cristina Vela Laboratorio Clínico Especializado </p>
                </div>
            </div>
        </div>
    )
}

export default Footer