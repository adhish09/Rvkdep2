import React, { useContext } from "react";
import "./Donation.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import { FiUnlock } from "react-icons/fi";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "../../services/apiService";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";

 
const Detail = (props) => {
   
  const {donate}=useContext(AuthContext)
 
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    
  } = useForm();
  const handlePayment = data =>{
    axios.post('/api/donate/', {...data,amount:donate})
    .then((response) => {
     toast.success(<>{response.data.message}</>)
    })
    .catch((error) => {
     alert(error)
     toast.error(<h1>{error.data.message}</h1>)
    });
  }
  const onSubmit = (data) => {
    if (donate=== "") {
      alert("please enter amount");
    } else {
      try {
        var options = {
          key: "rzp_test_2y68LXTdn3DKK9",
          key_secret: "GU6RrUGnP2KId7WFSrMULPus",
          amount: donate * 100,
          currency: "INR",
          name: "Rvk",
          description: "for testing purpose",
          handler: function (response) {
            handlePayment(response);
            alert('Payment successful!');
          },
          prefill: {
            name: data.name,
            email: data.email,
            contact: data?.phone_number,
          },
          notes: {
            address: data.address,
          },
          theme: {
            color: "#3399cc",
          },
        };
       
        var pay = new window.Razorpay(options);
       
        pay.open();
      } catch (error) {
   
      }
    }
    reset();
  };
  const [isCheckedYes, setIsCheckedYes] = useState(false);
  const [isCheckedNo, setIsCheckedNo] = useState(false);

  const handleCheckboxYesChange = (event) => {
    setIsCheckedYes(event.target.checked);
    setIsCheckedNo(false);
  };

  const handleCheckboxNoChange = (event) => {
    setIsCheckedNo(event.target.checked);
    setIsCheckedYes(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Change = (event) => {
    if (isChecked2) {
      setIsChecked2(false);
    }
    setIsChecked1(event.target.checked);
  };
  
  const handleCheckbox2Change = (event) => {
    if (isChecked1) {
      setIsChecked1(false);
    }
    setIsChecked2(event.target.checked);
  };
   
  return (
    <div className="newss313" style={{paddingTop:"100px"}}>
      <div className="backcont">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="donationhead01">
            Personal Information
            <br />
          </div>
          <div className="thin-line01"></div>

          <section className="main-card--cointainer-bottom91131">
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> First Name</div>
                    <div>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name && "invalid"
                        } datainp`}
                        {...register("first_name", {
                          required: "First Name is Required",
                        })}
                        onKeyUp={() => {
                          trigger("name");
                        }}
                        placeholder="Enter First Name"
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Last Name</div>
                    <div>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.namel && "invalid"
                        } datainp`}
                        {...register("last_name", {
                          required: "Last Name is Required",
                        })}
                        onKeyUp={() => {
                          trigger("namel");
                        }}
                        placeholder="Enter Last Name"
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.namel && (
                        <small className="text-danger">
                          {errors.namel.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Email</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Email here"
                        className={`form-control ${
                          errors.email && "invalid"
                        } datainp`}
                        {...register("email", {
                          required: "Email is Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("email");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Phone Number</div>
                    <div>
                      <input
                        type="number"
                        placeholder="Enter Phone number"
                        className={`form-control ${
                          errors.phone && "invalid"
                        } datainp`}
                        {...register("phone_number", {
                          required: "Phone is Required",
                          pattern: {
                            value:
                              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: "Invalid phone number",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("phone");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.phone && (
                        <small className="text-danger">
                          {errors.phone.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Address</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter address"
                        className={`form-control ${
                          errors.address && "invalid"
                        } datainp`}
                        {...register("address", {
                          required: "Address is Required",
                        })}
                        onKeyUp={() => {
                          trigger("address");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.address && (
                        <small className="text-danger">
                          {errors.address.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-last91131 ">
            <div className="data31">Do you want tax benifit?</div>

            <label className="checkboxpadding">
              <input
                type="checkbox"
                checked={isCheckedYes}
                onChange={handleCheckboxYesChange}
              />
              {" "}Yes{"  "}
            </label>
            <label>
              {" "}
              <input
                type="checkbox"
                checked={isCheckedNo}
                onChange={handleCheckboxNoChange}
              />
              {" "}No <br />
              <div className="data3174">
                Please tick this box if you are a taxpayer in india and would
                like to avail tax benifits. To avail this, you need to provide
                your PAN number.
              </div>
            </label>

          </div>
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Pin Code</div>
                    <div>
                      <input
                        type="number"
                        placeholder="Enter your Pin Code"
                        maxLength={6}
                        className={`form-control ${
                          errors.pin && "invalid"
                        } datainp`}
                        {...register("pin_code", {
                          required: "Pin Code is Required",
                        })}
                        onKeyUp={() => {
                          trigger("pin");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.pin && (
                        <small className="text-danger">
                          {errors.pin.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> City</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your city"
                        className={`form-control ${
                          errors.city && "invalid"
                        } datainp`}
                        {...register("city", { required: "City is Required" })}
                        onKeyUp={() => {
                          trigger("city");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.city && (
                        <small className="text-danger">
                          {errors.city.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> State</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        className={`form-control ${
                          errors.state && "invalid"
                        } datainp`}
                        {...register("state", {
                          required: "State is Required",
                        })}
                        onKeyUp={() => {
                          trigger("state");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.state && (
                        <small className="text-danger">
                          {errors.state.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Country</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your country"
                        className={`form-control ${
                          errors.country && "invalid"
                        } datainp`}
                        {...register("country", {
                          required: "Country is Required",
                        })}
                        onKeyUp={() => {
                          trigger("country");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.country && (
                        <small className="text-danger">
                          {errors.country.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isCheckedYes && !isCheckedNo ? (
              <div>
                <div className="card-container-last91131">
                  <div className="card-last91131 ">
                    <div className="card-body-last91131">
                      <div className="details31">
                        <div className="data31"> PAN</div>
                        <div>
                          <input
                            type="text"
                            maxLength={10}
                            placeholder="Enter PAN number"
                            className={`form-control ${
                              errors.pan && "invalid"
                            } datainp1`}
                            {...register("pan", {
                              required: "PAN is Required",
                              pattern: {
                                value:
                                  /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/,
                                message: "Invalid PAN Number",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("pan");
                            }}
                          />{" "}
                          <div className="thin-line02"></div>
                          {errors.pan && (
                            <small className="text-danger">
                              {errors.pan.message}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            ) : null}
          </section>
          <div className="basecheck">
            <div>
              <input type="checkbox" required />
            </div>
            <div className="tandc">
              <p>
                I Agree and accept that Donations are not refundable under any
                circumstances for
                <span>
                  <a
                    href="https://www.rajvidyakender.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rajvidyakender.org
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="lastbutton67">
            <div className="paysecbut">
              <div className="butslide98">
                <button className="lastbutton0151">
                  <NavLink to="/donation" className="backbut">
                    Back
                  </NavLink>
                </button>
              </div>
              <div className="butslide998">
                {" "}
                <button className="lastbutton0251" type="submit">
                  <div>
                    <FiUnlock />
                  </div>
                  <p>Pay Securely</p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Detail;
