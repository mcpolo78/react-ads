import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Header = (props) =>{
    
    return (
        <header>
            <nav id="menu">
                <Link className="nav-title" to="/">Home</Link>
                <Link className="nav-title" to="/Admin">Admin</Link>
                <Link className="nav-title" to="/Form">Formulaire</Link>
            </nav>
        </header>
    )
}

export default Header