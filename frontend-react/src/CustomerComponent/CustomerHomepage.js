import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./Products";

import "../style.css";


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
import { Card } from "react-bootstrap";

export default function CustomerHomepage() {
  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [vendorproducts, setVendorProducts] = useState([]);
  const [msg, setMsg] = useState("");
  const [qty, setQty] = useState(1);


  const navigate = useNavigate();

  const uid = (JSON.parse(localStorage.getItem("loggedUser"))).id;
  const user = (JSON.parse(localStorage.getItem("loggedUser")));

  useEffect(() => {
    
    fetch("http://localhost:8080/getCategories")
      .then((resp) => resp.json())
      .then((data) => setCategory(data));
  }, []);

  const showProduct = (e) => {
    fetch("http://localhost:8080/getAvailableProducts?cid=" + e.target.value)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));

      setCatflag(true);

     
  };

  const viewProduct = (v) => {
    // alert(productid);
    console.log(v.target.value)
    fetch("http://localhost:8080/getVendorProductsCustomer?pid=" + v.target.value)
      .then((resp) => resp.json())
      .then((data) => {setVendorProducts(data)
      console.log(data);
      });
      // console.log(vendorproducts);

      setPrdflag(true);
  
  };


  const addToCart1 = (vpid, uid, qty) => {

    if(qty>0)
    {
    fetch(
     
      "http://localhost:8080/addToCart?vpid=" +
        vpid +
        "&uid=" +
        uid +
        "&qty=" +
        qty
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data !== null) {
          setMsg("successfully added to cart");
        } else {
          setMsg("something went wrong");
        }
      });
    }
    else
    setmsg1("cannot proceed for -ve Quantity");
      // alert(qty);
  };

  const[msg1,setmsg1]=useState("");
  const[catflag,setCatflag]=useState(false);
  const[prdflag,setPrdflag]=useState(false);

  return (
    <div className="App fs-4">
      
      <div  id="operations">
      
     
        <h5 className="text-info text-center">Welcome <span >{user.customer.first_name} {user.customer.last_name}</span></h5>
       
      </div>
      <div id="cart">
       
      </div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div className="container col-3">
          <ul className="navbar-nav">
            <li>
              <select name="categories" onChange={(e) => showProduct(e)}>
                <option disabled selected>select Catagories</option>
                {categories.map((v) => {
                  return <option value={v.id}>{v.name}</option>;
                 
                })}
              </select>
            </li>
          </ul>
        </div>
         <div className="container col-3 "> 
          
              <select name="categories" onChange={(e) => viewProduct(e)} >
                <option  selected value='0'>select Product</option>
                {products.map((v) => {
                  return <option value={v.id}>{v.productName}</option>;
                 
                })}
              </select>
        </div> 
        
      </nav>

       
      {/*  
      container table-responsive-smtable-responsive-sm fs-4*/}
      
   <div className="container credit text-center mb-3 login-form-container col-9" style={{display:prdflag?"block":"none"}}>
      <table  className="table table-striped table-responsive table-info" >
        <thead>
          <tr>
            <th>
              <h1><b>Image</b></h1>
            </th>
            <th>
              <h1><b>Product name</b></h1>
            </th>
            <th>
              <h1><b>Description</b></h1>
            </th>
            <th>
              <h1><b>Vendor name</b></h1>
            </th>
            <th>
              <h1><b>Price</b></h1>
            </th>
            <th>
              <h1><b>Quantity</b></h1>
            </th>
            <th>
              <h1><b>Cart</b></h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {vendorproducts.map((v) => {
            return (
              <tr  key={v.id}>
                <td>

                < Card.Img width={200} height={200}  className="img-thumbnail" src={`data:image/png;base64,${v.product.picture}`} /><br/>

                  {/* <img
                    src={`data:image/png;base64,${v.product.picture}`}
                    alt="Product"
                    className="img-thumbnail"
                    style={{ maxWidth: "300px", height: "300px" }}
                  /> */}
                  {/* {v.product.picture && (
            <img
              src={`data:image/png;base64,${v.product.picture}`}
              alt="Product"
              className="img-thumbnail"
              style={{ maxWidth: "300px", height: "300px" }}
            />
          )} */}
                </td>
                <td>
                  <p>{v.product.productName}</p>
                </td>
                <td>
                  <p>{v.product.description}</p>
                </td>
                <td>
                  <p>{v.vendor.shopName}</p>
                </td>
                <td>
                  <p> {v.price}</p>
                </td>
                <td>
                <input
                      type="number"
                      className="form-control"
                      id="qty"
                      name="qty"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />

                </td>
                <td>
                  <div className="input-group">
                   
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-warning"
                        type="button"
                        onClick={() => addToCart1(v.id, uid, qty)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
     
      </div>
      
      <div className="text-success">{msg}</div>
      <div className="text-warning">{msg1}</div>


      <Outlet />
    </div>
  );
}
