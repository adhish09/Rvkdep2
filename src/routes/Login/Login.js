import React, { useState, useEffect,useContext,useReducer  } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { IoCloseOutline } from "react-icons/io5";
import "./Login.css";
import { toast } from "react-hot-toast";


const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: "",
      password: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [modall, setModall] = useState(false);

  const toggleModall = () => {
    setModall(!modall);
  };

  if (modall) {
    document.body.classList.add("active-modal1");
  } else {
    document.body.classList.remove("active-modal1");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await login(formData.email, formData.password);
     
      if (response.status === 200) {
     
       await navigate("/")
       toast.success("successfully login")
       window.location.reload()
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      setSubmitting(false);
    }
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
              <p>Welcome back to RVK</p>
            </div>
            <form className="logindetails" onSubmit={handleSubmit}>
              <div className="pp">Email/Phone*</div>
              <input className="loginemail" placeholder="Enter here" name="email" onChange={handleChange}/>
              <br />
              <div className="pp">Password*</div>
              <div className="password-input-container">
                <input type={showPassword ? "text" : "password"} className="loginemail1" placeholder="Enter password here" name="password" onChange={handleChange}/>
                <span
                  className="password-toggle-icon"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
             
              <div className="ppp" style={{color:"yellow !important"}}> <Link to="/forgatepassword" style={{color:"yellow !important"}}>Forgot password ?*</Link></div>

              <button className="button1" onClick={toggleModall}>
                Login
              </button>
            </form>
            <div className="body11">
              <p>
                Don’t have an account? <NavLink to="/signup"> <span>Sign up</span></NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
