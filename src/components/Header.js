import React, { Component } from 'react'
import { Link } from 'react-scroll'
import '../styles/Header.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        console.log("toggle");
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
        });
    }

    render () {
        return (
            <div className="header-container">
                <ul id="header">
                    <li className={this.state.active ? "selected" : null}><Link activeClass="active" to="home" smooth={true} onClick={() => this.toggleClass()}>Home</Link></li>
                    <li className={this.state.active ? "selected" : null} onClick={() => this.toggleClass()}><Link to="about" smooth={true}>About</Link></li>
                    <li className={this.state.active ? "selected" : null} onClick={() => this.toggleClass()}><Link to="projects" smooth={true}>Projects</Link></li>
                    <li className={this.state.active ? "selected" : null} onClick={() => this.toggleClass()}><Link to="contact" smooth={true}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;