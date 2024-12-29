import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminViewAllCustomers(){
     
    const[customers, setCustomers]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        // fetch("http://localhost:8080/getCustomers")
        fetch("https://localhost:7188/api/Category/customers")
        .then(resp=>resp.json())
        .then(data=>setCustomers(data))
    },[])
    return(
        <div className="container credit text-center mt-5 login-form-container col-8">
            <h1>All customers list</h1>
            <table className="table table-bordered table-responsive table-striped">
                   <thead>
                      <tr>
                          <th>User id</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>View</th>
                          
                      </tr>
                   </thead>
                   <tbody>
                          {customers.map((v)=>{ return(
                            <tr>
                                <td>
                                    {v.userId}
                                </td>
                                <td>
                                    {v.firstName}
                                </td>
                                <td>
                                    {v.lastName}
                                </td>
                                <td>
                                    <button type="button" onClick={()=>{navigate(`/admin/viewCustomer/${v.userId}`)}}>View details</button>
                                </td>
                            </tr>)
                          })}  
                   </tbody>
             </table>
             <button type="button" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
        </div>
    )
}