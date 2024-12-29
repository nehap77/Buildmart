import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAddCategory(){

    const initialState={
        name : "",
        description : ""
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
  const [msg,setMsg]=useState("");
  const [msg1,setMsg1]=useState("");

  const addCategory=()=>{
    if(info.name!=="" && info.description!=="")
    {
         const reqOptions={
        method : "POST",
        headers : {'content-type':'application/json'},
        body : JSON.stringify(info)
      }

      fetch("http://localhost:8080/add_category",reqOptions)
      .then(resp=>{
        if(resp.ok)
        {
           setMsg("Category Added SuccessFully");
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
    else setMsg1("Form is Not Filled Completely")
  }
    return(
        
            <div className="container credit text-center mt-5 login-form-container col-6" style={{ backgroundColor: 'lightblue', padding: '20px', border: '1px solid ', borderRadius: '10px' }}>
    
            <h1>Category details form</h1>
            <form>
                <label htmlFor="name">Enter category name</label>
                <input type="text" id="name" name="name" value={info.name} required onChange={(e)=>{dispatch({type:'update', fld:'name', value:e.target.value})}} />
                <label htmlFor="description">Enter description</label>
                <input type="text" id="description" name="description" value={info.description} required onChange={(e)=>{dispatch({type:'update', fld:'description', value:e.target.value})}} />
                <div>
                <button className="btn btn-outline-primary fs-4 " style={{width:200}} type="button" onClick={()=>{addCategory()}} >Add category</button>
                </div>
                <div>
                <button className="btn btn-outline-primary fs-4 " style={{width:200}} type="button" onClick={()=>{navigate("/admin")}} >Back</button>
                </div>
            </form>
            <div className="text-success">{msg}</div>
            <div className="text-warning">{msg1}</div>
        </div>
    )
}