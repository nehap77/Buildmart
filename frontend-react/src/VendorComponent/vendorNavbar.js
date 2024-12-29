import img from "../images/logo.webp"
import { Link, Outlet } from "react-router-dom";
import img1 from "../images/BML.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBars,
  faInfoCircle,
  faSearch,
  faUser,
  faShoppingCart,
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

export default function VendorNav() {
return(
    <div>
        <header className="header container-fluid">
        <ul className="nav navbar navbar-dark bg-dark">
          <li className="navbar-brand">
            <Link to="/vendornav" className="nav-link" style={{ fontSize: 40 }}>
            <img  src={img1} style={{width:"250px", height:"50px"  }} alt="pic"/>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="vendor" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-link">
            <Link to="emps" className="nav-link">
              Order History
            </Link>
          </li>
        
        
          <li className="nav-item">
            <Link to="viewProfileVendor" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
        <Outlet/>
      </header>

      <body>
         <div className=' credit text-center'>
                <br/>
            {/* <h1>Welcome to Buidlmart</h1>
        <img  src={img} style={{width:"500px", height:"300px"  }} alt="pic"/> */}

            </div>
      </body>

    </div>
)
}