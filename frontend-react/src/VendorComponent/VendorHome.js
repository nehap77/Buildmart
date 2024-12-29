
import React, { useReducer, useState, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";

import "../style.css";


function VendorHome() {
  const initialState = {
    category_id: 0,
    product_id: 0,
    quantity: 0,
    price: 0,
    offer_percentage: 0,
    offer_valid_date: "",
    vid: 0,
  };

  const [user, setUser] = useState({});
  const [vendor, setVendor] = useState((JSON.parse(localStorage.getItem("VendorUser"))));
  const [role, setRole] = useState("");

  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setproducts] = useState([]);
  const [flag, setflag] = useState(true);
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("loggedUser"));

    fetch("http://localhost:8080/getUserById?id=" + u.id)
      .then((resp) => resp.json())
      .then((obj) => {
        setUser(obj);
        setVendor(obj.vendor);

        dispatch({
          type: "update",
          fid: "vid",
          value: u.id,
        });
      });

    fetch("http://localhost:8080/getVendorProductsVendors?uid=" + u.id)
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setProductList(data); // Fix: Set the fetched data to the state
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fid]: action.value };
      case "reset":
        return initialState;
      default:
    }
  };

  const [newproduct, dispatch] = useReducer(reducer, initialState);
  const [msg,setMsg]=useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/getCategories")
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  }, []);

  const editProduct = (e) => {
    dispatch({ type: "update", fid: "category_id", value: e.target.value });

    fetch("http://localhost:8080/getProductsByCid?cid=" + e.target.value)
      .then((resp) => resp.json())
      .then((data) => setproducts(data));
  };

  const reLoadProducts = () => {
    fetch("http://localhost:8080/getVendorProductsVendors?uid=" + user.id)
      .then((resp) => resp.json())
      .then((data) => setProductList(data));
  };

  const deleteProduct = (productId) => {
    alert(productId)
      fetch("http://localhost:8080/deleteVendorProduct?vpid=" + productId)
        .then((resp) => resp.json())
        .then((data) => {
          if (data > 0) {
            alert("Product Deleted");
            reLoadProducts();
          } else alert("Failed to Delete Product");
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    
  };

  const addProduct = (e) => {
    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newproduct),
    };

    if(newproduct.category_id!= 0 &&
      newproduct.product_id!= 0 &&
      newproduct.quantity!= 0 &&
      newproduct.price!= 0 &&
      newproduct.offer_percentage!= 0 &&
      newproduct.offer_valid_date!= "")
    {fetch("http://localhost:8080/addVendorProduct", reqOptions).then((resp) => {
      if (resp) {
        reLoadProducts();
      } else alert("Failed to add product");
    });}
    else
    setMsg("Fill complete Information");

    if (flag === true) setflag(false);
    else setflag(true);
  };

  const addnewProductfrom = () => {
    if (flag === true) setflag(false);
    else setflag(true);
  };

 
  // const chooseCat = (e) => {
  //   dispatch({
  //     type: "update",
  //     fid: "product_id",
  //     value: e,
  //   });

  //   fetch("http://localhost:8080/getProductsByCid?cid=" + e)
  //     .then((resp) => resp.json())
  //     .then((data) => setproducts(data));
  // };

  const editProductForm = (v) => {
    console.log(v);
    localStorage.setItem("editingpr",JSON.stringify(v));
  //  alert(v)
    navigate("/editproduct");
  };
  const [vendorOrderList,setvendorOrderList] = useState([{}])
 // const [vendor,setVendor] = useState((JSON.parse(localStorage.getItem("VendorUser"))))
  const viewOrders=()=>{
    fetch("http://localhost:8080/getVendorOrderItems?vid="+vendor.id)
    .then((resp) => resp.json())
    .then((data) => setvendorOrderList(data)
   
    );
    console.log(vendorOrderList);
    localStorage.setItem("orders",JSON.stringify(vendorOrderList))
    navigate("/vieworderitems");
  }
  return (
    <div className="home">
      
      <body>
        <br/>
        <div className="container credit text-center mt-5 login-form-container col-9">
          <table className="table table-striped table-hover ">
            <thead className="table-dark">
              <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th >Price</th>
              <th>Delete Product</th>
              <th >Edit Product</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((v) => {
                return (
                  <tr>
                    {<td>{v.product.productName}</td>}
                    <td>{v.quantity}</td>
                    <td>{v.price}</td>
                    <td>
                      <input className="btn btn-outline-primary"
                        type="button"
                        id={v.id}
                        value={"Delete"}
                        onClick={() => deleteProduct(v.id)}
                      ></input>
                    </td>
                    <td>
                      <a className="btn btn-outline-primary"
                        href="#"
                        onClick={() => {
                          editProductForm(v);
                        }}
                      >
                        edit
                      </a>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={5}>
                  <input
                    className="btn  btn-primary btn-lg"
                    type="button"
                    id="addbt"
                    value={"Add New Product"}
                    onClick={addnewProductfrom}
                  ></input>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
        className="container credit text-center mt-5 login-form-container col-9"
          // className="container mt-5  formfild"
          style={{ display: flag ? "none" : "block" }}
        >
          <h1>Add Product</h1>
          <form>
            <div >
              <label htmlFor="category_id" className="form-label">
                Select Category
              </label>
              <select
                id="category_id"
                name="category_id"
                className="form-control"
                onChange={(e) => {
                  editProduct(e);
                }}
              >
                <option>Select Category</option>
                {categories.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="product_id" className="form-label">
                Select Product
              </label>
              <select
                id="product_id"
                name="product_id"
                className="form-control"
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "product_id",
                    value: e.target.value,
                  });
                }}
              >
                <option>Select Product</option>
                {products.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>
                      {v.productName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="price" class="form-label">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                value={newproduct.price}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "price",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="quantity" class="form-label">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="form-control"
                value={newproduct.quantity}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "quantity",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="offer_percentage" class="form-label">
                Offer Percentage
              </label>
              <input
                type="number"
                id="offer_percentage"
                name="offer_percentage"
                className="form-control"
                value={newproduct.offerPercentage}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "offer_percentage",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="offer_valid_date" class="form-label">
                Offer Valid Date
              </label>
              <input
                type="date"
                id="offer_valid_date"
                name="offer_valid_date"
                className="form-control"
                value={newproduct.offerValidDate}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "offer_valid_date",
                    value: e.target.value,
                  });
                }}
              />
            </div>

            <button
              type="button"
              className="btn  btn-primary btn-lg"
              onClick={(e) => addProduct(e)}
            >
              Add Product
            </button>
          </form>
        </div>
        <div className="text-danger">
          {msg}
        </div>
      </body>
      

     
    </div>
  );
    }

export default VendorHome;
