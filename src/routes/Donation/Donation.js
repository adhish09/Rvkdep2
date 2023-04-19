import React, { useContext } from "react";
import "./Donation.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import { FiUnlock } from "react-icons/fi";
import { IoReturnUpForwardOutline } from "react-icons/io5";
 
import Detail from "./Detail";
import { AuthContext } from "../../contexts/AuthContext";
import styled from "styled-components";
const Button = styled.button`
  padding: 7px 15px;
  margin-top: 24px;
  margin-bottom:35px;
  margin-left: 10%;
  background-color: #da9532;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: orange;
  }
  width: 75%;
  height: 50px;
  border-radius: 25px;
`;
const Donation = () => {

  const [buttonClicked, setButtonClicked] = useState(false);
 const {setDonate} =  useContext(AuthContext)
  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const buttonStyle1 = {
    background: "linear-gradient(95.09deg, rgba(226, 148, 36, 0.83) 0%, rgba(106, 241, 209, 0.61) 100%)",
    padding: "10px",  
    
  };

  const buttonStyle2 = {
    background: "#a0a1a5",
    padding: "10px",
  };



  const [inputValue, setInputValue] = useState("");

  const handleButtonClick1 = () => {
    setInputValue(inputValue === "100" ? "" : "100");
  };
  const handleButtonClick2 = () => {
    setInputValue(inputValue === "200" ? "" : "200");
  };
  const handleButtonClick3 = () => {
    setInputValue(inputValue === "500" ? "" : "500");
  };
  const handleButtonClick4 = () => {
    setInputValue(inputValue === "1000" ? "" : "1000");
  };
  const handleButtonClick5 = () => {
    setInputValue(inputValue === "5000" ? "" : "5000");
  };
  const handleButtonClick6 = () => {
    setInputValue(inputValue === "10000" ? "" : "10000");
  };

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    console.log('this isname');
    // value(event.target.value)
    setInputValue(event.target.value);
  };



  function handleSubmit(event) {
     setDonate(inputValue)
  }

  return (
    <div className="newss313" >
      <div className="card-container_out91131">
        <div className="card_out91131 ">
          <div className="card-body91131">
            <h2 className="card-title_out91131">
              Donation <br />
              <div className="card-description_out91131">
                <br />
                Join the Team of Visionaries with RVK{" "}
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="backcont">
        <section className="main-card--cointainer91131">
          <div className="card-container91131">
            <div className="card91131 ">
              <div className="donatenow">
                <button
                  className="donateo" style={buttonClicked ? buttonStyle2 : buttonStyle1} onClick={handleClick}>

                  Donate Once
                </button>
                <button
                  className="donatem" style={buttonClicked ? buttonStyle1 : buttonStyle2} onClick={handleClick}>

                  Donate Monthly
                </button>
              </div>
              <br />
              <div className="donateamt">
                <button className="donateal" onClick={handleButtonClick1}>
                  ₹ 100
                </button>
                <button className="donatear" onClick={handleButtonClick2}>
                  ₹ 200
                </button>
              </div>
              <br />
              <div className="donateamt">
                <button className="donateal" onClick={handleButtonClick3}>
                  ₹ 500
                </button>
                <button className="donatear" onClick={handleButtonClick4}>
                  ₹ 1000
                </button>
              </div>
              <br />
              <div className="donateamt">
                <button className="donateal" onClick={handleButtonClick5}>
                  ₹ 5000
                </button>
                <button className="donatear" onClick={handleButtonClick6}>
                  ₹ 10000
                </button>
              </div>
              <br />
              <div className="donatenow">
                <input
                  className="donatateinp"
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}

                  placeholder="Type your own amount"
                />
              </div>
              <br />
              <div className="donatenow">

                <div className="submitamt">
                  {inputValue ? (
                    <button className="submitamt" type="submit" onClick={handleSubmit}>
                      <NavLink to="/detail"   className="submitamt">Donate Now</NavLink>
                    </button>
                  ) : (
                    <button className="submitamt01" type="submit" disabled>
                      Donate Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donation;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Razorpay from 'razorpay';

// const DonationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState(0);
//   const [paymentId, setPaymentId] = useState(null);

//   const handleNameChange = event => setName(event.target.value);
//   const handleEmailChange = event => setEmail(event.target.value);
//   const handleAmountChange = event => setAmount(event.target.value);

//   const handleSubmit = event => {
//     event.preventDefault();
//     axios.post('/api/donations/create/', {
//       name,
//       email,
//       amount
//     })
//     .then(response => {
//       setPaymentId(response.data.payment_id);
//       renderRazorpayForm();
//     })
//     .catch(error => console.log(error));
//   }

//   const renderRazorpayForm = () => {
//     if (paymentId) {
//       const razorpayInstance = new Razorpay({
//         key_id: '<YOUR_RAZORPAY_KEY_ID>',
//         amount: amount * 100,
//         currency: 'INR'
//       });
//       razorpayInstance.on('payment.success', function (response) {
//         setPaymentId(response.razorpay_payment_id);
//         // Update the backend with the payment details
//         axios.post('/api/donations/verify/', {
//           payment_id: response.razorpay_payment_id,
//           amount: amount
//         })
//         .then(response => console.log(response))
//         .catch(error => console.log(error));
//       });
//       razorpayInstance.on('payment.cancel', function () {
//         console.log('Payment cancelled');
//       });
//       razorpayInstance.open();
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
//       </div>
//       <div>
//         <label htmlFor="amount">Amount:</label>
//         <input type="number" id="amount" name="amount" value={amount} onChange={handleAmountChange} />
//       </div>
//       <button type="submit">Donate</button>
//     </form>
//   );
// }

// export default DonationForm;
