import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function EditProfileCustomer() {
  const uss = useState(JSON.parse(localStorage.getItem("loggedUser")));
  const users = useState(JSON.parse(localStorage.getItem("CustomerUser")));
  // useEffect(() => {
  //   const u = ;
  //   setUs(u);
  // }, []);
  // alert(us);

  // useEffect(() => {
  //   fetch("http://localhost:8080/getUserById?id=" + us.id)
  //     .then((resp) => resp.json())
  //     .then((data) => setUser(data));
  // }, [us]);

  const initialState = {
    uid: "",
    fname: "",
    lname: "",
    email: "",
    cno:"",
    uname: "",
    pwd: "",
    cpwd: "",
    // qid: {
    //   value: us.question.id,
    //   hasError: false,
    //   error: "",
    //   touched: false,
    // },
    // ans: { value: user.answer, hasError: false, error: "", touched: false },
    // isFormValid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fid]: action.value };

      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    const user=JSON.parse( localStorage.getItem("CustomerUser"));
    const us = JSON.parse(localStorage.getItem("loggedUser"));

        dispatch({ type: "update", fid: "uid", value:user.id});
        dispatch({ type: "update", fid: "fname", value: user.first_name});
        dispatch({ type: "update", fid: "lname", value:user.last_name});
        dispatch({ type: "update", fid: "email", value: user.email});
        dispatch({ type: "update", fid: "cno", value: user.contact_number});
        dispatch({ type: "update", fid: "uname", value:us.username});
        dispatch({ type: "update", fid: "pwd", value: us.password});
        dispatch({ type: "update", fid: "cpwd", value: us.password});
  },[])

  const [emails, setEmail] = useState([]);
  const [unames, setUname] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getCustEmails")
      .then((resp) => resp.json())
      .then((data) => setEmail(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/getusernames")
      .then((resp) => resp.json())
      .then((data) => setUname(data));
  }, []);
  var error=useState("");

  // const handleChange = (name, value) => {
  //   //a. call validation logic
  //    error = validateData(name, value);

  //   //b. check form validity status
  //   // let isFormValid = true;
  //   // for (const key in info) {
  //   //   // console.log(key+" : "+emp[key].hasError )
  //   //   if (info[key].hasError === true) {
  //   //     isFormValid = false;
  //   //     break;
  //   //   }
  //   // }

  //   //c. call dispatch method
  //   dispatch({
  //     type: "update",
  //     data: { name, value},
  //   });
  // };

  // const validateData = (name, value) => {
   
  //   let error = "";
  //   switch (name) {
  //     case "email":
  //       if (value === users.email) {
          
  //         error = "";
  //       } else {
  //         emails.forEach((element) => {
  //           if (element === value) {
             
  //             error = "email already used";
  //           }
  //         });
  //       }
  //       break;

  //     case "uname":
  //       if (value === uss.username) {
          
  //         error = "";
  //       } else {
  //         unames.forEach((element) => {
  //           if (element === value) {
             
  //             error = "username already used";
  //           }
  //         });
  //       }
  //       break;
  //     case "pwd":
  //       var exp1 =
  //         /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!,@,#,$,%,^,&,*])[\w\W]{8,}/;
  //       if (!exp1.test(value)) {
         
  //         error =
  //           "password should contain atleast one Capital,small letter,special char,number";
  //       }
  //       break;

  //     case "cno":
  //       var exp2 = /[\d]{10}/;
  //       if (!exp2.test(value)) {
         
  //         error = "invalid contact number";
  //       }
  //       break;

  //     case "cpwd":
  //       if (info.pwd !== value) {
         
  //         error = "confirm password mismatched";
  //       }
  //       break;
  //     default:
  //   }
  //    return error;
  // };

  // const [questions, setQuestion] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/getquestions")
  //     .then((resp) => resp.json())
  //     .then((data) => setQuestion(data));
  // }, []);

 
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();

    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:8080/editCustomer", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.text();
        else throw new Error("server error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Invalid username/password");
        } else {
          navigate("/cust");
        }
      });
  };

  return (
    <div className="container fs-4">
      <form>
        <div className="mb-3">
          <label htmlFor="fname">Enter First name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder={users.first_name}
            onChange={(e) => {
              // submitData("fname", e.target.value);
              dispatch({
                type: "update",
                fid: "fname",
                value: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="lname">Enter Last name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            // placeholder={users.last_name}
            value={users.last_name}
            onChange={(e) => {
              // handleChange("lname", e.target.value);
              dispatch({
                type: "update",
                fid: "lname",
                value: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Enter Email id</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder={users.email}
            onChange={(e) => {
              // handleChange("email", e.target.value);
              dispatch({
                type: "update",
                fid: "email",
                value: e.target.value,
              });
            }}
          />
          
        </div>
        <div>
          <label htmlFor="cno">Enter Contact number</label>
          <input
            type="text"
            id="cno"
            name="cno"
            placeholder={users.contact_number}
            onChange={(e) => {
              // handleChange("cno", e.target.value);
              dispatch({
                type: "update",
                fid: "cno",
                value: e.target.value,
              });
            }}
          />
          
        </div>
        <div>
          <label htmlFor="uname">Enter username</label>
          <input
            type="text"
            id="uname"
            name="uname"
            placeholder={uss.username}
            onChange={(e) => {
              // handleChange("uname", e.target.value);
              dispatch({
                type: "update",
                fid: "uname",
                value: e.target.value,
              });
            }}
          />
          
        </div>
        <div>
          <label htmlFor="pwd">Enter password</label>
          <input
            type="text"
            id="pwd"
            name="pwd"
            placeholder={uss.password}
            onChange={(e) => {
              // handleChange("pwd", e.target.value);
              dispatch({
                type: "update",
                fid: "pwd",
                value: e.target.value,
              });
            }}
          />
          
        </div>
        <div>
          <label htmlFor="cpwd">Confirm password</label>
          <input
            type="text"
            id="cpwd"
            name="cpwd"
            placeholder={uss.password}
            onChange={(e) => {
              // handleChange("cpwd", e.target.value);
              dispatch({
                type: "update",
                fid: "cpwd",
                value: e.target.value,
              });
            }}
          />
         </div>
        {/* <div>
          <label htmlFor="qid">Select Question for forget password</label>
          <select
            id="qid"
            name="qid"
            onChange={(e) => {
              handleChange("qid", e.target.value);
            }}
          >
            {questions.map((v) => {
              return (
                <option key={v.id} value={v.id}>
                  {v.question}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="ans">Enter Answer</label>
          <input
            type="text"
            id="ans"
            name="ans"
            value={info.ans.value}
            onChange={(e) => {
              handleChange("ans", e.target.value);
            }}
          />
        </div> */}

        <input
          type="submit"
          className="btn btn-primary"
         
          value="Update"
          onClick={(e) => {
            submitData(e);
          }}
        />
        <input
          type="reset"
          className="btn btn-secondary mx-2"
          value="Reset"
          onClick={(e) => {
            dispatch({ type: "reset" });
          }}
        />
      </form>
      <div>{error}</div>
      <div>{msg}</div>
    </div>
  );
}
