import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AdminViewAllVendors(){

    const[vendors, setVendors]=useState([]);
    const navigate= useNavigate();

    const allowVender = (vid) => {
        
          fetch("http://localhost:8080/allowVender?vpid=" + vid)
            .then((resp) => resp.json())
            .then((data) => {
              if (data > 0) {
                alert("Vender Allowed");
              } else alert("Failed to Allow Vender");
            })
            .catch((error) => {
              console.error("Error try again:", error);
            });
        
      };

      const blockVender = (vid) => {
        
        fetch("http://localhost:8080/blockVender?vpid=" + vid)
          .then((resp) => resp.json())
          .then((data) => {
            if (data > 0) {
              alert("Vender Blocked");
            } else alert("Failed to Block Vender");
          })
          .catch((error) => {
            console.error("Error Try again:", error);
          });
      
    };

    useEffect(()=>{
        fetch("http://localhost:8080/getVendors")
        .then(resp=>resp.json())
        .then(data=>setVendors(data))
    },[])
    return(
        <div className="container credit text-center mt-5 login-form-container col-8">
            <h1>All vendors list</h1>
             <table className="table table-bordered table-responsive table-striped">
                   <thead>
                      <tr>
                          <th>User id</th>
                          <th>Shop Name</th>
                          <th>Registration No</th>
                         <th>Authorise Vender</th>
                          <th>View</th>
                          
                      </tr>
                   </thead>
                   <tbody>
                          {vendors.map((v)=>{return(
                            <tr>
                                <td>
                                    {v.user.id}
                                </td>
                                <td>
                                    {v.shopName}
                                </td>
                                <td>
                                    {v.reg_no}
                                </td>
                                <td>
                                      {v.valid === 1 ? (
                                         <input className="btn btn-outline-danger"
                                         type="button"
                                         id={v.id}
                                         value={"Reject"}
                                         onClick={() => blockVender(v.user.id)}
                                     ></input>
                                      ) : (
                                    <input className="btn btn-outline-primary"
                                         type="button"
                                         id={v.id}
                                         value={"Approve"}
                                         onClick={() => allowVender(v.user.id)}
                                     ></input>
                                      )}
                                      </td>
                               
                                <td>
                                    <button type="button" onClick={()=>{navigate(`/admin/viewVendor/${v.user.id}`)}}>View details</button>
                                </td>
                            </tr>)
                          })}  
                   </tbody>
             </table>
             <button type="button" onClick={()=>{navigate("/admin")}}>Back to homepage</button>
        </div>
    )
}