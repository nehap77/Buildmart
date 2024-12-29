import "./script.js";
import "./App.css";
import "./style.css";


import img from "./images/BML.png";
import Home from "./MainHome/Home.js";

import {Route, Routes } from "react-router";
import { Link } from "react-router-dom";

// Importing ForntAwsome for icon and symbols
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBars,
  faInfoCircle,
  faSearch,
  faUser,
  faTimes,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF as fabFacebookF,
  faTwitter as fabTwitter,
  faInstagram as fabInstagram,
  faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import CompanyRegister from "./Registration/CompanyRegister.js";
import { useState } from "react";
import CustomerRegister from "./Registration/CustomerRegister.js";
import VendorRegister from "./Registration/VendorRegister.js";
// import LabourRegister from "./Registration/SpRegister.js";
import Login from "./MainHome/Login (2).js";
// import LoginSuccess from "./MainHome/LoginSuccess.js";
import { useSelector } from "react-redux";
import CustomerHomepage from "./CustomerComponent/CustomerHomepage.js";
import VendorHome from "./VendorComponent/VendorHome.js";
import EditProfileCustomer from "./CustomerComponent/EditProfileCustomer.js";
import ViewCart from "./CustomerComponent/ViewCart.js";
import Logout from "./MainHome/Logout.js";
import ViewProfile from "./CustomerComponent/ViewProfile.js";
// import Mailer from "./MainHome/Mailer.js";
import EditProduct from "./VendorComponent/EditProduct.js";
import MyOreders from "./CustomerComponent/MyOrders.js";
import OrderSuccess from "./CustomerComponent/OrderSuccess.js";
import ForgotPassword from "./MainHome/ForgotPassword.js";
import AdminHome from "./AdminComponent/AdminHome.js";
import AdminViewCategories from "./AdminComponent/AdminViewCategories.js";
import AdminViewCustomer from "./AdminComponent/AdminViewCustomer.js";
import AdminViewVendor from "./AdminComponent/AdminViewVendor.js";
import AdminViewAllVendors from "./AdminComponent/AdminViewAllVendors.js";
import AdminViewAllCustomers from "./AdminComponent/AdminViewAllCustomers.js";
import AdminAddCategory from "./AdminComponent/AdminAddCategory.js";

import AddCategorySuccess from "./AdminComponent/AddCategorySuccess.js";
import VendorOrderItems from "./VendorComponent/VendorOrderItems.js";

import {useNavigate } from "react-router-dom";
import OrderHistory from "./VendorComponent/OrderHistory.js";
import SpRegister from "./Registration/SpRegister.js";
import AdminAddProduct from "./AdminComponent/AdminAddProduct.js";
import UpdateCustomer from "./CustomerComponent/edit.js";
import ViewProfileVendor from "./VendorComponent/ViewProfile.js";
import Updatevendor from "./VendorComponent/edit.js";
import VendorNav from "./VendorComponent/vendorNavbar.js";
import cust from "./CustomerComponent/Customernavbar.js";
import Cust from "./CustomerComponent/Customernavbar.js";

library.add(faStar);

function App() {
  const [role, setRole] = useState("");
  const mystate = useSelector((state) => state.logged);
  const navigate=useNavigate();

  // alert(mystate.loggedIn);
  return (
    <div className="App">
      <header style={{backgroundColor:"InfoBackground"}} className="header container-fluid">
        <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
          <ul className="nav navbar bg-dark">
         <li className="nav-link logo">
              <Link to="/home" className="nav-link" style={{ fontSize: 40 }}>
              <img  src={img} style={{width:"300px", height:"80px"  }} alt="pic"/>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/home" className="nav-link fs-4">
                HOME
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/login" className="nav-link fs-4">
                Login
              </Link>
            </li>
            <li>
            <select name="role" className="nav-link fs-4" onChange={(e)=>{navigate(e.target.value)}}>
                <option><p className="fs-4">New Here? Register</p></option>
                <option value="/custregister"><a href="/custregister" >
                                              Customer Registration</a>
                </option>
                {/* <option value="/companyregister"><a href="/companyregister" className="nav-link">
                                             Company Registration</a>
                </option> */}
                <option value="/vendorregister"><a href="/vendorregister" className="nav-link">
                                          Vendor Registration</a>
                </option>
                {/* <option value="/spregister"><a href="/spregister" className="nav-link">
                                            Service provider Registration</a>
                </option> */}
              </select>
            </li>
          </ul>
        </div>
      </header>
      <body>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/custregister" element={<CustomerRegister />}></Route>
          {/* <Route path="/companyregister" element={<CompanyRegister />}></Route> */}
          <Route path="/vendorregister" element={<VendorRegister />}></Route>
          <Route path="/spregister" element={<SpRegister />}></Route>
          
         
          {/* <Route path="/feedback" element={<Mailer />} /> */}
          <Route path="/editproduct" element={<EditProduct />}>
            {" "}
          </Route>
         
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/check" element={<VendorHome/>}></Route>
       
         
          <Route path="/ordersuccess" element={<OrderSuccess />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

          <Route path="/cust" element={<Cust/>}>
          <Route path="customer" element={<CustomerHomepage />}/>
               <Route path="myOrders" element={<MyOreders />}></Route>
              <Route path="editprofilecust" element={<UpdateCustomer />} />
              <Route path="viewProfile" element={<ViewProfile />} />
              <Route path="viewCart" element={<ViewCart />} />
                
          </Route>

          <Route path="/vendornav" element={<VendorNav/>}>
                  <Route path="vendor" element={<VendorHome />}/>
                <Route path="vieworderitems" element={<VendorOrderItems />}/>
                <Route path="emps" element={<OrderHistory />}/>
                <Route path="viewProfileVendor" element={<ViewProfileVendor />}/>
                <Route path="editprofilevendor" element={<Updatevendor />}/>
                
                
          </Route>
          <Route path="admin" element={<AdminHome />}>

                <Route path="v_categories" element={<AdminViewCategories />}/>
                <Route path="add_category" element={<AdminAddCategory />} />
                <Route path="add_product" element={<AdminAddProduct />}/>
                <Route path="v_vendors" element={<AdminViewAllVendors />}/>
                <Route path="v_customers" element={<AdminViewAllCustomers />}/>
                <Route path="viewCustomer/:id/" element={<AdminViewCustomer />}/>
                <Route path="categoryaddsuccess" element={<AddCategorySuccess />}/>
                <Route path="viewVendor/:id/" element={<AdminViewVendor />}/>
                <Route path="addnewcategory" element={<AdminAddCategory />}/>

          </Route>
         


        </Routes>
       
      </body>
      <footer>
       

        <section className="footer">
          

          <div className="credit text-center">
            <br/>
            {" "}
            Created by{" "}
            <span className="text-danger">
            | DHIRAJ NAGARGOJE | GAJANAN SHINDE | RUSHIKESH NIKAM | SUYASH BHONDE |
            </span>{" "}
            PG-DAC Sep-2023{" "}
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
