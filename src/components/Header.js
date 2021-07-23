import React, { Component } from 'react'
import { Link } from 'react-scroll'
import '../styles/Header.css'

class Header extends Component {

    render () {
        return (
            <div className="header-container">
                <ul className="header">
                    <li className={this.props.active[0] ? "selected" : null}><Link activeClass="active" to="home" smooth={true} onClick={() => this.props.onClick(0)}>Home</Link></li>
                    <li className={this.props.active[1] ? "selected" : null}><Link to="about" smooth={true} onClick={() => this.props.onClick(1)}>About</Link></li>
                    <li className={this.props.active[2] ? "selected" : null}><Link to="projects" smooth={true} onClick={() => this.props.onClick(2)}>Projects</Link></li>
                    <li className={this.props.active[3] ? "selected" : null}><Link to="contact" smooth={true} onClick={() => this.props.onClick(3)}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;