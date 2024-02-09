import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Credits.css';
import '../styles/Main.css';

function Credits() {
    return (
        <div className="credits-container">
            <div className="credits-header-container">
                <ul className="credits-header">
                    <li><Link to="/portfolio" className="home-link">Home</Link></li>
                </ul>
            </div>
            <div className="credits">
                <h1 className="subheading">Credits</h1>
                <h3>Assets</h3>
                <ul>
                    <li className="credits-item">
                        Title background video by{' '}
                        <a
                            href="https://pixabay.com/users/enchantedstudios-722609/?tab=videos"
                            title="EnchantedStudios"
                        >
                            EnchantedStudios
                        </a>{' '}
                        from{' '}
                        <a href="https://pixabay.com/" title="Pixabay">
                            www.pixabay.com
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        Github logo from{' '}
                        <a
                            href="https://github.com/logos"
                            title="Github"
                        >
                            Github
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        Golang logo from{' '}
                        <a
                            href="https://blog.golang.org/go-brand"
                            title="Golang"
                        >
                            Golang
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        GraphQL logo from{' '}
                        <a
                            href="https://commons.wikimedia.org/wiki/File:GraphQL_Logo.svg"
                            title="Wikimedia Commons"
                        >
                            Wikimedia Commons
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        LinkedIn logo from{' '}
                        <a
                            href="https://brand.linkedin.com/downloads"
                            title="LinkedIn"
                        >
                            LinkedIn
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        MongoDB logo from{' '}
                        <a
                            href="https://www.mongodb.com/brand-resources"
                            title="MongoDB"
                        >
                            MongoDB
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        Node.js logo from{' '}
                        <a
                            href="https://nodejs.org/en/about/resources/"
                            title="Node.js"
                        >
                            Node.js
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        Python logo from{' '}
                        <a
                            href="https://www.python.org/community/logos/"
                            title="Python"
                        >
                            Python
                        </a>{' '}
                    </li>
                    <li className="credits-item">
                        React logo from{' '}
                        <a
                            href="https://commons.wikimedia.org/wiki/File:React-icon.svg"
                            title="Wikimedia Commons"
                        >
                            Wikimedia Commons
                        </a>{' '}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Credits;