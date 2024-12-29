import "./shubham.css";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxcomponents/slice";

export default function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.value };

      case "reset":
        return initialState;
      default:
    }
  };

  const [info, dispatch] = useReducer(reducer, initialState);
  const reduxaction=useDispatch();

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const checkLogin = (e) => {
    e.preventDefault();

    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:8080/checkLogin", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.text();
        else throw new Error("server error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Invalid username/password");
        } else {

          reduxaction(login())
          localStorage.setItem("loggedUser",JSON.stringify(obj));
          if (obj.role.id === 1) {
            localStorage.setItem("CustomerUser",JSON.stringify(obj.customer));
            navigate("/cust");
          } else if (obj.role.id === 2) {
            localStorage.setItem("CompanyUser",JSON.stringify(obj.company));
            navigate("/company");
          } else if (obj.role.id === 4) {
            localStorage.setItem("LabourUser",JSON.stringify(obj.labour));
            navigate("/labour");
          }
          else if (obj.role.id === 5) {
            localStorage.setItem("CustomerUser",JSON.stringify(obj.admin));
            navigate("/admin");
          }
          else if (obj.role.id === 3 && obj.vendor.valid===1) {
            localStorage.setItem("VendorUser",JSON.stringify(obj.vendor));
            navigate("/vendornav");
          } else setMsg("Your account is under observation...please try again after some time...");
        }
      })
      .catch((error) => alert("server error. Try again"));
  };
  // return (<div className="body">
  // <div style={{ padding: '20px 50px', marginLeft:'320px', border: '1px solid ', borderRadius: '2px', height:'360px'}} >
  //   <form>
  //       <div>
  return (
    <div className="body">
    <div style={{ padding: '20px 50px', marginTop:"140px", marginLeft:'300px', border: '1px solid ', borderRadius: '8px', height:'360px', backgroundColor:"white"}} >

     {/* <div className="container mt-5 login-form-container col-6" style={{ backgroundColor: 'lightblue', padding: '20px', border: '1px solid ', borderRadius: '10px' }}> */}
      <form>
        <div className="credit text-center">
          <label htmlFor="username" className="form-label">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "username",
                value: e.target.value,
              });
            }}
          />
          
        </div>
        <div>
          <label htmlFor="password" className="form-label">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "password",
                value: e.target.value,
              });
            }}
          />
        
        </div>
        <div >
        <button
          className="btn btn-outline-primary fs-4 "
          type="submit"
          style={{width:200}}
          onClick={(e) => checkLogin(e)}
        >
          Login
        </button>
        </div>
        <span><a href="/forgotpassword" style={{width:200}} className="btn btn-outline-primary">forgot password</a></span>
        
      </form>
      <div className="text-danger">{msg}</div>
    </div>
    </div>
  
  );
}
