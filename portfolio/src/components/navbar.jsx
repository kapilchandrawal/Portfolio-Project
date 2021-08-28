import React from 'react'
import {BrowserRouter as Router , Switch, Link,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Academics from './Academics';
export default function Navbar() {
    return (
        <div>
            <div className="nav-img">
                <img src="#" alt="test" />
            </div>
            
            <Router>
                <div className="navbar">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Me</Link>
                    <Link to='/projects'>My Projects</Link>
                    <Link to='/academics'>Academics</Link>
                    <Link to='/contact'>Contact Me</Link>
                    </div>
                <div className="page">
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/projects' component={Project}></Route>
                    <Route exact path='/academics' component={Academics}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                </Switch>
                </div>
            </Router>
            </div>
    )
}
