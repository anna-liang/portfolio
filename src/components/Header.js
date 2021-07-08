import React, { Component } from 'react'
import { Link } from 'react-scroll'
import '../styles/Header.css'

class Header extends Component {
    render () {
        return (
            <ul id="header">
                <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                <li><Link to="about" smooth={true}>About</Link></li>
                <li><Link to="projects" smooth={true}>Projects</Link></li>
                <li><Link to="contact" smooth={true}>Contact</Link></li>
            </ul>
        )
    }
}

export default Header;