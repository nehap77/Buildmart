import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAddProduct(){

    const initialState={
      productName : "",
        description : "",
        catid:"",
        picture:""
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update' :
                 return { ...state, [action.fld]:action.value};

             case 'reset' : return initialState;
        }
  }

  const navigate= useNavigate();

  const[info,dispatch]=useReducer(reducer,initialState);

  const [categories, setCategories] = useState([]);
  const [msg,setMsg]=useState("");
  const [msg1,setMsg1]=useState("");

  useEffect(() => {
    fetch("http://localhost:8080/getCategories")
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  }, []);


  const addProduct=()=>{
       if(info.productName!==""&&
       info.description!==""&&
       info.catid!=="")
     { 
      
      const reqOptions={
        method : "POST",
        headers : {'content-type':'application/json'},
        body : JSON.stringify(info)
      }

      fetch("http://localhost:8080/addProduct",reqOptions)
      .then(resp=>{
        if(resp.ok)
        {
          setMsg("Product Added Successful");
          setMsg1("");
        }
        else
             throw new Error("Server error");
      }
        )
        .catch((error)=>{
            alert("updation failed");
       })
      
    }
    else
    setMsg1("Name , description & Catagory can not be null");
  }
    return(
        <div className="container mt-5 login-form-container col-6 credit text-center" style={{ backgroundColor: 'lightblue', padding: '20px', border: '1px solid ', borderRadius: '10px' }}>
            <h1>Products details form</h1>
            <form>
                <label htmlFor="productName">Enter Product Name and Unit Quantity</label>
                <input type="text" id="productName" name=" productName"  value={info.productName} onChange={(e)=>{dispatch({type:'update', fld:'productName', value:e.target.value})}} required />
                <label htmlFor="description">Enter description</label>
                <input type="text" id="description" name="description"  value={info.description} onChange={(e)=>{dispatch({type:'update', fld:'description', value:e.target.value})}} required/>
                {/* <label htmlFor="stockQuantity">Enter stockQuantity</label> */}
                {/* <input type="number" id="stockQuantity" name="stockQuantity" value={info.stockQuantity} onChange={(e)=>{dispatch({type:'update', fld:'stockQuantity', value:e.target.value})}} /> */}
              {/*  <label htmlFor="cid">Enter cid</label>
                <input type="number" id="cid" name="cid" value={info.cid} onChange={(e)=>{dispatch({type:'update', fld:'cid', value:e.target.value})}} />
    */} 
                <div>
              <label htmlFor="catid" className="form-label">
                Select Category
              </label>
               <select id="catid" name="catid"  onChange={(e) => {dispatch({type:'update', fld:'catid', value:e.target.value})}}>
                <option required >select Catagories</option>
                {categories.map((v) => {
                  return <option value={v.id}>{v.name}</option>;
                 
                })}
              </select>
            </div>
                <label htmlFor="picture">Enter picture</label>
                <div className=' credit text-center'><input  type="file" name="file" id="file"/></div>
               <div>
                <button className="btn btn-outline-primary fs-4 " style={{width:200}} type="button" onClick={()=>{addProduct()}} >Add Product</button></div>
                <div>
                <button className="btn btn-outline-primary fs-4 " style={{width:200}} type="button" onClick={()=>{navigate("/admin")}} >Back</button></div>
            </form>
            <div className="text-success">{msg}</div>
            <div className="text-warning">{msg1}</div>
        </div>
    )
}