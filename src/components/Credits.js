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
                        Guide for{' '}
                        <a
                            href="https://medium.com/how-to-react/scroll-to-an-element-on-click-in-react-js-8424e478bb9"
                            title="Scroll to an element on click in React js"
                        >
                            react-scroll
                        </a>{' '}
                        by{' '}
                        <a
                            href="https://manntrix.medium.com/"
                            title="Manish Mandal"
                        >
                            Manish Mandal
                        </a>
                    </li>
                    <li className="credits-item">
                        Guide for{' '}
                        <a
                            href="https://www.youtube.com/watch?v=NgWGllOjkbs"
                            title="How to send emails using React through EmailJs"
                        >
                            EmailJs
                        </a>{' '}
                        by{' '}
                        <a
                            href="https://www.youtube.com/channel/UCILGh2xwcP-QXfp6K8HwFfg"
                            title="RemyFamily"
                        >
                            RemyFamily
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Credits;