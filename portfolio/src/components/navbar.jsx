import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Academics from './Academics';
import profile from '../assets/profile.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div>


            <Router>
                <div className="nav-img" >
                    <img src={profile} alt="test" height="50px" />
                </div>
                <div className="navbar">
                    <Link to='/'>About Me</Link>

                    <Link to='/projects'>My Projects</Link>
                    <Link to='/academics'>Academics</Link>
                    <Link to='/contact'>Contact Me</Link>
                </div>
                <div className="page">
                    <Switch>
                        <Route exact path='/' component={About}></Route>

                        <Route exact path='/projects' component={Project}></Route>
                        <Route exact path='/academics' component={Academics}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
