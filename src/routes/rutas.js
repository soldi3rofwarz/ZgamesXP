import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';

import LandingP from './../pages/landing';

const Rutas =()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={LandingP}/>
            </Switch>
        </Router>
    )
}

export default Rutas