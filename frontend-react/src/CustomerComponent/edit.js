import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UpdateCustomer() {
  const mystate = useSelector((state) => state.logged);
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    // fetchCustomer();
    const user=JSON.parse(localStorage.getItem("CustomerUser"));
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

    fetch(`http://localhost:8080/editCustomer/${uid.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Customer updated successfully:', data);
        localStorage.setItem("CustomerUser",JSON.stringify(data));
        navigate("/cust/viewProfile");
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
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={customer.first_name}
            name="first_name"
            value={customer.first_name || ""}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="last_name"
            value={customer.last_name || ""}
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
            name="contact_number"
            value={customer.contact_number || ""}
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
            navigate("/cust");
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