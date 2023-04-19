import React, {useContext, useEffect,  useState} from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from '../../services/apiService';
import { ClassSharp } from "@material-ui/icons";
import { toast } from "react-hot-toast";


const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
   const [activeUser,setActiveUser] = useState();
  const [state, setState] = useState({});

   
  const [users,setUsers] = useState({});
  useEffect(()=>{
    setUsers(user)
  },[])
  const handleName = e =>{
    const u = {name:e.target.value,age:users?.age,smart_card:users?.smart_card,email:users?.email,phone_number:users?.phone_number,address:users?.address,gender:users?.gender};
    setUsers(u)
  }
  const handleAge = e =>{
    const u = {name:users?.name,age:e.target.value,smart_card:users?.smart_card,email:users?.email,phone_number:users?.phone_number,address:users?.address,gender:users?.gender};
    setUsers(u)
  }
  const handleSmart = e =>{
    const u = {name:users?.name,age:users?.age,smart_card:e.target.value,email:users?.email,phone_number:users?.phone_number,address:users?.address,gender:users?.gender};
    setUsers(u)
  }
 
  const handleEmail = e =>{
    const u = {name:users.name,age:users?.age,smart_card:users?.smart_card,email:e.target.value,phone_number:users?.phone_number,address:users?.address,gender:users?.gender};
    setUsers(u)
  }
  const handlePhone = e =>{
    const u = {name:users.name,age:users?.age,smart_card:users?.smart_card,email:users?.email,phone_number:e.target.value,address:users?.address,gender:users?.gender};
    setUsers(u)
  }
  const handleAddress = e =>{
    const u = {name:users.name,age:users?.age,smart_card:users?.smart_card,email:users?.email,phone_number:users?.phone_number,address:e.target.value,gender:users?.gender};
    setUsers(u)
  }
  const handleGender = e =>{
    const u = {name:users.name,age:users?.age,smart_card:users?.smart_card,email:users?.email,phone_number:users?.phone_number,address:users?.address,gender:e.target.value};
    setUsers(u)
  }
    
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }


  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData()

    data.append("name", users.name)
    data.append("age", users?.age)
    data.append("smart_card", users.smart_card)
    data.append("email", users.email)
    data.append("phone_number", users.phone_number)
    data.append("address", users.address)
    data.append("gender", users.gender)

    if (selectedFile){
      data.append("profile_picture", selectedFile)
    }
 

    // Submit form data to server
     axios.patch('/api/profile/', data)
    .then((response) => {
      toast.success("You have successfully updated your account");
       navigate("/profile")
       window.location.reload()
    })
    .catch((error) => {
       toast.error('can not update profile')
    });
  }


  return (
    <div className="newss313">
      <div className="backcont">
        <form >
          <div className="donationhead01">
            Update Information
            <br />
          </div>
          <div className="thin-line01"></div>

          <section className="main-card--cointainer-bottom91131">
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31">Name</div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        onChange={handleName}
                        value={users?.name||""}
                      
                        className="datainp"
                        placeholder="Enter Name"
                        // defaultValue={user?.name}
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Age</div>
                    <div>
                      <input
                        type="number"
                        name="age"
                        value={users?.age|| ""}
                        onChange={handleAge}
                        className="datainp"
                        placeholder="Enter Your Age"
                        defaultValue={user?.age}
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Smart Card</div>
                    <div>
                      <input
                        type="text"
                        name="smart_card"
                        onChange={handleSmart}
                        className="datainp"
                        placeholder="Smart card number"
                        value={users?.smart_card||""}
                        
                      />{" "}
                      <div className="thin-line02"></div>

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
                        type="email"
                        name="email"
                        value={users?.email}
                        // onChange={handleChange}
                        placeholder="Enter Email here"
                        className="datainp"
                        readOnly
                      />{" "}
                      <div className="thin-line02"></div>

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
                        name="phone_number"
                        value={users?.phone_number|| ""}
                        onChange={handlePhone}
                        placeholder="Enter Phone number"
                        className="datainp"
                       
                      />{" "}
                      <div className="thin-line02"></div>

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
                        name="address"
                        value={users?.address|| ""}
                        onChange={handleAddress}
                        placeholder="Enter address"
                        className="datainp"
                     
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Gender</div>
                    <div>
                    <div className="datainp">
                    <select
                      className="dropdownselect"
                      name="gender"
                      // value={users?.gender||""}
                      onChange={handleGender}
                    >
                       <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Profile Photo</div>
                    <div>
                      <input
                        type="file"
                        name="age"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="datainp"
                        placeholder="Enter Your Age"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <div className="lastbutton678">

                <button className="lastbutton01" onClick={handleSubmit}>

                  <p>Update</p>
                </button>
              </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;
