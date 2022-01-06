import React from "react";
import {Outlet,Link} from "react-router-dom";
import homeIcon from "../img/iconhome.png";


const HomePage = () =>{


    return(
        <div className="homepage">
            <div className="navbar">
                <div>
                    <Link to={'/'}><img src={homeIcon}/></Link>
                </div>
                <div className="nav-left">
                    <Link to={'categories'}>Categories</Link>
                    <Link to={'about'}>About-Us</Link>
                    <Link to={'contact'}>Contact-Us</Link>
                    <Link to={'dashboard'}>Dashboard</Link>
                </div>
            </div>
            <div className='outlethome'>
                <h3>HomePage</h3>
                <Outlet/>
            </div>
        </div>
    )
}
export default HomePage;