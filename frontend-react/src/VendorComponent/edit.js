import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Updatevendor() {
  const mystate = useSelector((state) => state.logged);
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    // fetchCustomer();
    const user=JSON.parse(localStorage.getItem("VendorUser"));
    setCustomer(user);
  }, []);

  // const fetchCustomer = () => {
  //   const uid = JSON.parse(localStorage.getItem("loggedUser"));
  //   (uid.id);
  //   fetch(`http://localhost:8080/getCustomerByUId?uid=${uid.id}`, { method: 'GET' })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCustomer(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching customer:', error);
  //     });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleUpdate = () => {
    const uid = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(uid);
    console.log(uid.id);

    fetch(`http://localhost:8080/editVendor/${uid.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Customer updated successfully:', data);
         localStorage.setItem("VendorUser",JSON.stringify(data));

        navigate("/vendornav/viewProfileVendor");
      })
      .catch((error) => {
        console.error('Error updating customer:', error);
      });
  };

  return (
    <div className="container col-md-6 ">
      <br/>
      <h2 style={{ textAlign: "center" }}>UPDATE PROFILE</h2> <br/>
      <Form className="form border p-4">
        <Form.Group controlId="formFirstName">
          <Form.Label>Shop Name</Form.Label>
          <Form.Control
            type="text"
            // placeholder={customer.shopName}
            name="shopName"
            value={customer.shopName || ""}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Registration number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Registration Number"
            name="reg_no"
            value={customer.reg_no || ""}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLicenseNo">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Email "
            name="email"
            value={customer.email || ""}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your Contact number"
            name="contactNumber"
            value={customer.contactNumber || ""}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
         <br/>
        <div className="text-center">
          <Button variant="primary" onClick={handleUpdate}>
            Update Profile
          </Button>
         
        </div>
        <div>
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
      </Form>
      {/* <Button variant="warning" onClick={navigate("/customer")}>
            Back
          </Button> */}
    </div>
  );
}