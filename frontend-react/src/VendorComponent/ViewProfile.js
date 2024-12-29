import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import EditProfileCustomer from "./EditProfileCustomer";

export default function ViewProfileVendor() {
  const [role, setRole] = useState("");
  // const[ruser,setRuser]=useState();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [user1, setUser1] = useState({});
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("loggedUser"));
    setUser(u);
    

    fetch("http://localhost:8080/getUserById?id=" + u.id)
      .then((resp) => resp.json())
      .then((obj) => {
        setUser(obj);

        if (obj.role.id === 1) {
         
          setRole("Customer");
        } else if (obj.role.id === 2) {
          
          setRole("Company");
        } else if (obj.role.id === 3) {
          setCustomer(obj.vendor);
          setRole("Vendor");
        } else if (obj.role.id === 4) {
          setRole("sp");
        }
      });
  }, []);

  

  return (
    <div className="login-form-container" 
    style={{ display: role === "Vendor" ? "block" : "none" }}
    >
      <div className="container credit text-center mt-5 login-form-container col-8" >
        <br/>
        <table className="table table-striped table-bordered table-info ">
          <thead>
            <tr>
              <th>Shop name</th>
              <th>Registration No</th>
              <th>Email</th>
              <th>Contact number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customer.shopName}</td>
              <td>{customer.reg_no}</td>
              <td>{customer.email}</td>
              <td>{customer.contactNumber}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={(e) => {
            navigate("/vendornav/editprofilevendor");
          }}
        >
          edit profile
        </button>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={(e) => {
            navigate("/vendornav");
          }}
        >
          Back
        </button>
      </div>

      {/* <div style={{ display: role === "Vendor" ? "block" : "none" }}>
        <table>
          <thead>
            <tr>
              <th>Vendor name</th>

              <th>Email</th>
              <th>Contact number</th>
              <th>Membership expiry date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user && user.vendor.shopName}</td>
              <td>{user && user.vendor.email}</td>
              <td>{user && user.vendor.contactNumber}</td>
              <td>{user && user.vendor.membership_payment.expiry_date}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={(e) => {
            navigate("/editprofilevendor");
          }}
        >
          edit profile
        </button>
      </div>

      <div style={{ display: role === "Company" ? "block" : "none" }}>
        <table>
          <thead>
            <tr>
              <th>Company name</th>
              <th>Email</th>
              <th>Contact number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user && user.customer.company_name}</td>
              <td>{user && user.customer.email}</td>
              <td>{user && user.customer.contact_number}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={(e) => {
            navigate("/editprofilecompany");
          }}
        >
          edit profile
        </button>
      </div>

      <div style={{ display: role === "Labour" ? "block" : "none" }}>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Contact number</th>
              <th>Experience</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user && user.labour.first_name}</td>
              <td>{user && user.labour.last_name}</td>
              <td>{user && user.labour.email}</td>
              <td>{user && user.labour.contact_number}</td>
              <td>{user && user.labour.experience}</td>
              <td>{user && user.labour.status}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={(e) => {
            navigate("/editprofilelabour");
          }}
        >
          edit profile
        </button>
      </div> */}

     
        
        {/* <Route path="/editprofilecompany" element={<EditProfileCompany user={ps.user} />} />
                 <Route path="/editprofilevendor" element={<EditProfileVendor user={ps.user} />} />
                 <Route path="/editprofilelabour" element={<EditProfileLabour user={ps.user} />} /> */}
      
    </div>
  );
}
