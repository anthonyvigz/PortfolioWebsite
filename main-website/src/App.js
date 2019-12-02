import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import AbsoluteWrapper from './components/AbsoluteWrapper';
import NavBar from './components/NavBar';
import './App.css';
import './css/landingpage.css';

function App() {

  let location = useLocation();


  if(location.pathname !== "/") {
    document.body.className = "altbody";
  } else {
    document.body.className = "mainbody";
  }

  let transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <AbsoluteWrapper>
      <NavBar />
      <div className="App">
        <div>
          {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
            </Switch>
          </animated.div>
          ))} 
      </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default App;
