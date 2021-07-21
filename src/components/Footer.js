import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Credits from './Credits';
import '../styles/Footer.css';

function Footer(props) {

    return (
        <Router>
            <footer>
                <div className="credits-btn">
                    <Link to="/portfolio/credits">
                        <input type="submit" className="btn btn-outline-light" value="Credits"/>
                    </Link>
                </div>
                <p>Created and designed by <span className="name">Anna Liang</span> &copy; 2021</p>
            </footer>
            <Switch>
                <Route exact path="/credits" component={Credits}></Route>
            </Switch>
        </Router>
    );
}

export default Footer;