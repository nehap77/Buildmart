import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function EditProduct() {


const navigate =useNavigate();
  
  const initialState = {
    vpid: 0,
    category_id: 0, // Make sure to set this to the correct category ID
    product_id: 0,
    quantity:0,
    price: 0,
    offer_percentage: 0,
    offer_valid_date: "0000-00-00",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fid]: action.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [editedProduct, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    const eprod=JSON.parse( localStorage.getItem("editingpr"));
        dispatch({ type: "update", fid: "product_id", value: eprod.product.getId });
        dispatch({ type: "update", fid: "name", value: eprod.product.productName});
        dispatch({ type: "update", fid: "vpid", value: eprod.id });
        dispatch({ type: "update", fid: "quantity", value: eprod.quantity});
        dispatch({ type: "update", fid: "price", value: eprod.price });
        dispatch({ type: "update", fid: "offer_percentage", value: eprod.offerPercentage});
        dispatch({ type: "update", fid: "offer_valid_date", value: eprod.offerValidDate});
  },[])



  const ee=JSON.parse( localStorage.getItem("editingpr"));

  const addProduct = () => {

   
    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(editedProduct),
    };

    fetch("http://localhost:8080/editExistingProduct", reqOptions)
      .then((resp) => {
        if (resp.ok) {
          // alert("Product Edited");
          navigate('/vendornav');
        } else alert("Failed to Edit Product");
        
      });
  };

  return (
    <div>
      <div>
        <div className="container mt-5">
          <form>
            <div>
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={ee.product.productName}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder={editedProduct.price}
                
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
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder={editedProduct.quantity}
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
              <label htmlFor="offer_percentage">Offer Percentage</label>
              <input
                type="number"
                id="offer_percentage"
                name="offer_percentage"
                placeholder={editedProduct.offer_percentage}
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
              <label htmlFor="offer_valid_date">Offer Valid Date</label>
              <input
                type="date"
                id="offer_valid_date"
                name="offer_valid_date"
                placeholder={editedProduct.offer_valid_date}
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
              className="btn btn-primary container"
              style={{width:"100px"}}
              onClick={() => addProduct()}
            >
              Submit
            </button>
            
            
          </form>
          <br></br>
          <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/vendornav")}
            >
              back
            </button>
        </div>
      </div>
    </div>
  );
}