import React, { useState, useContext, useReducer } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";

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

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { sign_up } = useContext(AuthContext);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      const response = await sign_up(
        formData.name,
        formData.phone_number,
        formData.email,
        formData.password
      );
      if (response.status === 200) {
        toast.success("check email to verification")
        navigate("/otp");
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      toast.error(error.data)
      setSubmitting(false);
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
      <div className="modal101">
        <div onClick={toggleModall} className="overlay101"></div>
        <div className="modalBackground101">
          <div className="modalContainer101">
          <div className="titleCloseBtn">
          <button onClick={toggleModal}><NavLink to="/" ><IoCloseOutline style={{color:"black"}}/></NavLink></button>
          </div>
            <div className="body101">
              <p>Create an account with RVK</p>
            </div>
            <form className="logindetails01" onSubmit={handleSubmit}>
              <div className="pp01">Name*</div>
              <input
                className="loginemail01"
                placeholder="Enter Name here"
                name="name"
                onChange={handleChange}
                required
              />
              <div className="pp01">Mobile Number*</div>
              <input
                className="loginemail01"
                placeholder="Enter Phone Number"
                name="phone_number"
                onChange={handleChange}
                required
              />
              <div className="pp">Email</div>
              <input
                className="loginemail01"
                placeholder="Enter here"
                name="email"
                onChange={handleChange}
              />
              <div className="pp">Password*</div>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="loginemail101"
                  placeholder="Enter password here"
                  name="password"
                  onChange={handleChange}
                />
                <span
                  className="password-toggle-icon"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <button className="button101" onClick={toggleModall}  >
                SignUp
              </button>
              <div className="terms">
                <p style={{paddingTop:"3px"}}>
                  By sign up you are agree to RVK
                  <br />
                  <span>Terms of use</span> and <span>Privacy policies</span>
                </p>
              </div>
            </form>
            <div className="body1101">
              <p>
                Already have an account? <NavLink to = "/login"><span>Sign in</span></NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
