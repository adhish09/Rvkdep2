import React, { useState, useContext, useReducer } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import axios from '../../services/apiService'
const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: "",
      phone_number: "",
      name: "",
      password: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function AuthVerify() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

 

  const [modall, setModall] = useState(false);

  const toggleModall = () => {
    setModall(!modall);
  };

  if (modall) {
    document.body.classList.add("active-modal101");
  } else {
    document.body.classList.remove("active-modal101");
  }
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
    const res = await axios.post('/api/verify-account/',{
        otp:formData.otp
      })
      console.log(res);
      // .then(res=>{
      //   // console.log(res.data.token);
         await toast.success("EMAIL VERIFY COMPLETE PLEASE LOGIN")
           await localStorage.setItem("access_token", res?.data?.token.access);
           await localStorage.setItem("refresh_token", res?.data?.token.refresh);
          await  navigate("/");
          await window.location.reload()
          
      // })
      
    } catch (error) {
      toast.error('wrong otp')
     console.log(error);
    //   setSubmitting(false);
    }
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <div className="modal101" >
        <div onClick={toggleModall} className="overlay101"></div>
        <div className="modalBackground101">
          <div className="modalContainer101">
          <div className="titleCloseBtn">
          </div>
            <div className="body101">
              <p>OTP FOR RVK ACCOUNT</p>
            </div>
            <form className="logindetails01" onSubmit={handleSubmit} style={{padding:"1px 0px 40px 0px"}}>
              
              <div className="pp">Otp</div>
              <input
                className="loginemail01"
                placeholder="Enter here"
                name="otp"
                onChange={handleChange}
              />
                 
              <button className="button101" style={{padding:"9px"}} onClick={toggleModall}  >
                Submit
              </button>
             
            </form>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthVerify;
