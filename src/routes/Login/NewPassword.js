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

function NewPassword() {
  
  const [formData, setFormData] = useReducer(formReducer, {});
  const [modall, setModall] = useState(false);
  const {resetApi} = useContext(AuthContext)
  const  navigate= useNavigate();
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
     axios.patch( `reset-password/${resetApi.encoded_pk}/${resetApi.token}/`,{
        password:formData.password
      })
      .then(res=>{
        console.log(res);
        if(res.status===201||res.status===200){
          navigate("/login") 
        }
        toast.success(<h1>Reset Password Complete</h1>)
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
              <p>Set New Password</p>
            </div>
            <form className="logindetails" onSubmit={handleSubmit}>
              <div className="pp">Password*</div>
              <input className="loginemail" placeholder="Enter here" name="password" onChange={handleChange}/>
               
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

export default NewPassword;
