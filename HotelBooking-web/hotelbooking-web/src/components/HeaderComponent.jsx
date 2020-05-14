import React, { Component } from "react";
import {Link} from 'react-router-dom';
// import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render() {
        return (
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                         <div><a href="https://github.com/mksjs" className="navbar-brand">HotelBooking</a></div> 
                        <ul className="navbar-nav">
                           <li><Link className="nav-link" to="/home">Home</Link></li>
                            <li><Link className="nav-link" to="/login">Book Hotel</Link> </li>
                        </ul>
                        <form inline>
                            <input type="text" placeholder="Search" className="mr-sm-2" />
                            <button variant="outline-primary">Search</button>
                        </form>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li><Link className="nav-link" to="/login"> Login</Link></li>
                            <li><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </header>         
        );
    }
}


export default withRouter(HeaderComponent);
