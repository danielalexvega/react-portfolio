import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Blog from './blog';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/index" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/blog" component={Blog} />


  </Switch>
)

export default Main;