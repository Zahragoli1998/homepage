import React from "react";
import { Outlet,Link } from "react-router-dom";
import homeIcon from "../img/iconhome.png";


const DashboardPage = () =>{

    return(
        <div className="dashboardpage">
            <div className="dashboardbox">
                <div className="dashboard-list">
                    <Link to={'user'}>UserControl</Link>
                    <Link to={'product'}>ProductControl</Link>
                    <Link to={'factor'}>FactorControl</Link>
                    <Link to={'store'}>StoreConrtrol</Link>
                </div>
                <div>
                    <Link to={'/'}><img src={homeIcon}/></Link>
                </div>
            </div>

            <div className="dashboard-main">
                <h3>DashboardPage</h3>
                <Outlet/>
            </div>
        </div>
    )
}
export default DashboardPage;