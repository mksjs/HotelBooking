import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListHotelsComponent from './ListHotelsComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';

class HotelBookingApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path='/home' exact component={ListHotelsComponent}/>
                        </Switch>
                        <FooterComponent/>
                        
                    </>
                </Router>
            </div>
        );
    }
}


export default HotelBookingApp;
 