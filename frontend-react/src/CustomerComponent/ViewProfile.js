import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EditProfileCustomer from "./EditProfileCustomer";

export default function ViewProfileCustomer() {
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
          setCustomer(obj.customer);
          setRole("Customer");
        } else if (obj.role.id === 2) {
          setRole("Company");
        } else if (obj.role.id === 3) {
          setRole("Vendor");
        } else if (obj.role.id === 4) {
          setRole("sp");
        }
      });
  }, []);



  return (
    <div className="login-form-container" 
    style={{ display: role === "Customer" ? "block" : "none" }}
    >
      <div className="container credit text-center mt-5 login-form-container col-8" >
        <br/>
        <table className="table table-striped table-bordered table-info ">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Contact number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.contact_number}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={(e) => {
            navigate("/cust/editprofilecust");
          }}
        >
          edit profile
        </button>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={(e) => {
            navigate("/cust");
          }}
        >
          Back
        </button>
      </div>

      
    </div>
  );
}
