import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-dark bg-dark">
                <Link to='/home' className="navbar-brand">React Routing</Link>
                <Link to='/cart' className="navbar-brand">Cart</Link>
                <Link to='/contactapp' className="navbar-brand">Contactapp</Link>
                <Link to='/funcontact' className="navbar-brand">Funnction Contact</Link>
            </nav>
            </>
        )
    }
}

export default Navbar
