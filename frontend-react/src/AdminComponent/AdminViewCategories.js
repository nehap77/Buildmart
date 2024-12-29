import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AdminViewCategories(){
   
    const[categories,setCategories]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        // fetch("http://localhost:8080/getCategories")
        fetch("https://localhost:7188/api/Category/categories")
        .then(resp=>resp.json())
        .then(data=>setCategories(data))
    },[])
   
    return(
          <div className="fs-4">
               <h1 className="credit text-center"><br/>List of all categories</h1>
               {/* className="container credit text-center mt-5 login-form-container col-8" */}
               <table  className="table table-bordered table-responsive table-striped table-info container credit text-center mt-5 login-form-container col-6">
                   <thead>
                        <tr>
                            <th>Category name</th>
                            <th>Description</th>
                        </tr>
                   </thead>
                   <tbody>
                        {categories.map((v)=>{
                            return(
                              <tr>
                                <td>{v.name}</td>
                                <td>{v.description}</td>
                              </tr>)
                        }) }
                   </tbody>
               </table>
               <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate("/admin/addnewcategory")}}>Add new Category</button>
               <button type="button" className="btn btn-outline-primary" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
          </div>
    )
}