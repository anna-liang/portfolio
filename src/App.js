import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Credits from './components/Credits';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.state = {
      active: Array(1).fill(true).concat(Array(3).fill(false)),
      scrollOffset: window.scrollY,
    }
  }

  toggleClass(i) {
    const currentActive = this.state.active;
    for (let j = 0; j < 4; j++)
    {
        if (j === i || currentActive[j])
          currentActive[j] = !currentActive[j];
    }
    this.setState({
        active: currentActive,
    });
  }

  scrollHandler() {
    this.setState({
      scrollOffset: window.scrollY,
    });
    let currentActive = Array(4).fill(false);
    if (this.state.scrollOffset < 700)
      currentActive[0] = true;
    else if (this.state.scrollOffset > 700 && this.state.scrollOffset < 1400)
      currentActive[1] = true;
    else if (this.state.scrollOffset >= 1400 && this.state.scrollOffset < 2400)
      currentActive[2] = true;
    else if (this.state.scrollOffset >= 2400)
      currentActive[3] = true;
    this.setState({
      active: currentActive,
    });
  }

  componentDidMount = () => window.addEventListener('scroll', this.scrollHandler);

  componentWillUnmount = () => window.removeEventListener('scroll', this.scrollHandler);

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/portfolio">
            <Header 
              active={this.state.active} 
              onClick={(i) => this.toggleClass(i)} 
            />
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/portfolio/credits">
            <Credits/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
