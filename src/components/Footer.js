import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="credits-btn">
                    <Link to="/portfolio/credits">
                        <button type="button" className="btn btn-outline-light">
                            Credits
                        </button>
                    </Link>
                </div>
                <p>Created and designed by <span className="name">Anna Liang</span> &copy; 2024</p>
            </footer>
        );
    }
}

export default Footer;