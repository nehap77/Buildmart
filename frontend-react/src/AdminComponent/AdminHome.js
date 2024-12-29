import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import img from "../images/logo.webp"
import img1 from "../images//BML.png"
import { useSelector } from 'react-redux';

export default function AdminHome() {

    const mystate = useSelector((state) => state.logged);
    return (
        <div className="fs-4">
            
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ display: mystate.loggedIn ? "block" : "none" }}>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/admin" className='nav-link px-3'>
                            <img  src={img1} style={{width:"250px", height:"50px"  }} alt="pic"/>
                            </Link>
                            <li className="nav-item ">
                                <Link to="/admin" className='nav-link px-3'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="v_categories" className='nav-link px-3'>View Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="add_category" className='nav-link px-3'>Add Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="add_product" className='nav-link px-3'>Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="v_vendors" className='nav-link px-3'>View Vendors</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="v_customers" className='nav-link px-3'>View Customers</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/logout" className='nav-link px-3'>Logout</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
                <Outlet/>
              
            </div>

            <div className=' credit text-center'>
                <br/>
            {/* <h1>Welcome to Buidlmart</h1>
        <img  src={img} style={{width:"500px", height:"300px"  }} alt="pic"/> */}

            </div>
        </div>
    )
}
