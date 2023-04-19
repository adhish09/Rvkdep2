import React, { useContext, useEffect, useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../services/apiService";
import "./Profile.css";

function Profile() {
  // const [user, setActiveUser] = useState({});
  const [event, setEvents] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get("/api/accounts/" + user?.id + "/");
  //       console.log(response);
  //       setActiveUser(response.data);
  //     } catch (error) {}
  //   };

  //   fetchUser();
  // }, [user]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios.get("/api/events").then((res) => {
          // setEvents(res.data);
    
          const filters = res?.data?.filter((item) =>
            item.user?.some((num) => num === user?.id)
          );
          console.log(filters);
          setEvents(filters);
        });
      } catch (error) {}
    };

    fetchUser();
  }, [user]);
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    window.location.href = "/login";
  };

  return (
    <div className="profile-cont-main"  >
      <section className="main-card--cointainer91158">
        <div className="card-container91158">
          <div className="card91158 ">
            <div className="editbutton">
              <NavLink to="editprofile">
                <button className="edit099">
                  <AiTwotoneEdit size={25} style={{ color: "black" }} />
                </button>
              </NavLink>
            </div>
            <div className="img911589">
              <img src={`https://rvkapidevbymossaddakv16.pythonanywhere.com/${user?.profile_picture}`} alt="" />
              <div className="nameprofile">
                {user?.name} , {user?.age}
              </div>
              <div className="smartcard">
                <p>{user?.email}</p>
              </div>
              <div className="donationprofile">Detail</div>
              <div className="donation_detail">
                <section className="main-card--cointainer-bottom9113163">
                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Name</div>
                          <div className="data3164">{user?.name}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Age</div>
                          <div className="data3164">{user?.age}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                   

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Gender</div>
                          <div className="data3164">
                            {user?.gender  }
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Email</div>
                          <div className="data3164">{user?.email}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Mobile</div>
                          <div className="data3164">
                            {user?.phone_number}
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Smart Card No</div>
                          <div className="data3164">
                            {user?.smart_card}
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container-last9113163">
                    <div className="card-last9113163 ">
                      <div className="card-body-last9113163">
                        <div className="details3163">
                          <div className="data3163">Address</div>
                          <div className="data3164">{user?.address}</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <button className="bookevent" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container91158_2">
          <div className="card91158 ">
            <div className="img91158">
              <div className="donationprofile">Donation History</div>
              <div className="donation_detail">
                <div className="donhistory1">
                  <div className="donationdetailheadingmain">
                    <div className="donationhead90">ID</div>
                    <div className="donationhead90">Date</div>
                    <div className="donationhead90">Amount</div>
                  </div>

                  {user?.Donation?.map((item, i) => (
                    <div
                      className="donationdetailheadingmain"
                      style={{ marginTop: "3px" }}
                    >
                      <div className="donationhead90">{item?.id}</div>
                      <div className="donationhead90">
                        {new Date(item?.order_date).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>

                      <div className="donationhead90">{item?.amount}</div>
                    </div>
                  ))}

                  <div className="donationscroll">
                    {user?.donations &&
                      user?.donations.map((donation) => (
                        <div className="donationdetailheading">
                          <div className="donationhead909">{donation?.id}</div>
                          <div className="donationhead909">
                            {donation?.created_at}
                          </div>
                          <div className="donationhead909">
                            {donation?.amount}
                          </div>
                          <div className="donationhead9099">
                            <u>View Receipt</u>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="donationprofile1">Event History</div>
              <div className="donation_detail">
                <div className="donhistory1">
                  <div className="donationdetailheadingmain">
                    <div className="donationhead9012">ID</div>
                    <div className="donationhead9013">Date</div>

                    <div className="donationhead901">Location</div>
                    <div className="donationhead9012">Ticket Price</div>
                  </div>
                  {event.map((item) => (
                    <div
                      className="donationdetailheadingmain"
                      style={{ marginTop: "3px" }}
                      key={item.id}
                    >
                      <div className="donationhead9012">{item.id}</div>
                      <div className="donationhead9013">
                        {new Date(item.created_at).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>

                      <div className="donationhead901">{item.location}</div>
                      <div className="donationhead9012">{item.event_price}</div>
                    </div>
                  ))}

                  <div className="donationscroll">
                    {user?.events &&
                      user?.events.map((event) => (
                        <div className="donationdetailheading">
                          <div className="donationhead90902">{event.id}</div>
                          <div className="donationhead90903">
                            {event.created_at}
                          </div>
                          <div className="donationhead9090">{event.name}</div>
                          <div className="donationhead9090">
                            {event.location}
                          </div>
                          <div className="donationhead909902">
                            <u>View</u>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <button className="bookevent" onClick={()=>navigate("/eventsall")}>Book Event</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
