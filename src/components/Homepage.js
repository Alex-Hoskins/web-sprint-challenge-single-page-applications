import React from 'react'
import { Route, Link } from 'react-router-dom';

const Homepage = (props) =>{
    return(
        <div className="home-wrapper">
            <Link to="/pizza" id="order-pizza"><h1>Lambda Pizza Kitchen</h1></Link>
            <Route path="/pizza"></Route>
        </div>
    )
}

export default Homepage