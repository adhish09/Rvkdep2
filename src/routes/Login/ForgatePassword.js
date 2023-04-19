import React, { useState, useEffect,useContext,useReducer  } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
 
import { IoCloseOutline } from "react-icons/io5";
import "./Login.css";
import axios from "../../services/apiService";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function ForgatePassword() {
  const {resetApi,setResetApi} = useContext(AuthContext)
  const [formData, setFormData] = useReducer(formReducer, {});
  const navigate = useNavigate()
  const [modall, setModall] = useState(false);

  const toggleModall = () => {
    setModall(!modall);
  };

  if (modall) {
    document.body.classList.add("active-modal1");
  } else {
    document.body.classList.remove("active-modal1");
  }

  const handleSubmit =   (event) => {
    event.preventDefault();
     axios.post("/reset-password/",{
        email:formData.email
      })
      .then(res=>{
       console.log(res);
       setResetApi(res.data)
        if(res.status===201||res.status===200){
          toast.success("check email to change password")
               navigate("/newpassword")
        }
        // toast.success(<h1>{res.data.message}</h1>)
      })
       .catch(err=>{
       toast.error(<h1>{err.response.data.message}</h1>)
    }
      )
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div className="modal1">
        <div onClick={toggleModall} className="overlay1"></div>
        <div className="modalBackground1">
          <div className="modalContainer1">
          <div className="titleCloseBtn">
          <button onClick={toggleModal}><NavLink to="/" ><IoCloseOutline style={{color:"black"}}/></NavLink></button>
          </div>
            <div className="body1">
              <p>Send Mail To Reset Password</p>
            </div>
            <form className="logindetails" onSubmit={handleSubmit}>
              <div className="pp">Email/Phone*</div>
              <input className="loginemail" placeholder="Enter here" name="email" onChange={handleChange}/>
               
              <button className="button1" onClick={toggleModall}>
                Send
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgatePassword;
