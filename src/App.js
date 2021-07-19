import './App.css';
import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Section from './components/Section';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.state = {
      active: Array(1).fill(true).concat(Array(3).fill(false)),
      scrollOffset: window.pageYOffset,
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
      scrollOffset: window.pageYOffset,
    });
    let currentActive = Array(4).fill(false);
    if (this.state.scrollOffset < 700)
      currentActive[0] = true;
    else if (this.state.scrollOffset > 700 && this.state.scrollOffset < 1400)
      currentActive[1] = true;
    else if (this.state.scrollOffset >= 1400 && this.state.scrollOffset < 2000)
      currentActive[2] = true;
    else if (this.state.scrollOffset >= 2000)
      currentActive[3] = true;
    this.setState({
      active: currentActive,
    });
  }

  componentDidMount = () => window.addEventListener('scroll', this.scrollHandler);

  componentWillUnmount = () => window.removeEventListener('scroll', this.scrollHandler);

  render() {
    return (
      <Fragment>
        <Header 
          active={this.state.active} 
          onClick={(i) => this.toggleClass(i)} 
        />
        <Home/>
        <About/>
        <Projects/>
        <Section/>
      </Fragment>
    );
  }
}

export default App;
