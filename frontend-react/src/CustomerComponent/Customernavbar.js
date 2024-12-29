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
import { Link, Outlet } from "react-router-dom";

export default function Cust(){

    return(
        <div>
            <div className="App fs-4">
      <header className="header container-fluid">
        <ul className="nav navbar navbar-dark bg-dark">
          <li className="nav-link logo">
            <Link to="/cust" className="nav-link" style={{ fontSize: 40 }}>
            <img  src={img1} style={{width:"250px", height:"50px"  }} alt="pic"/>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="customer" className="nav-link">
              HOME
            </Link>
          </li>
          
          <li className="nav-link">
            <Link to="myOrders" className="nav-link">
              Order History
            </Link>
          </li>
          <li className="nav-item">
            <Link to="viewCart" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="viewProfile" className="nav-link">
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
      </div>
        </div>
    )
}