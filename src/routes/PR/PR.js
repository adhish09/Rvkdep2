import "./PR.css";
import Globe1 from "./Globe3.png";
import Globe2 from "./Globe4.png";

import React, { useEffect, useState } from "react";
import axios from "../../services/apiService.js";
const PR = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  const [pr, setPr] = useState([])
  useEffect(() => {
    axios.get("/api/premrawatdescription/")
      .then(res => {

        setPr(res.data)
      })
  }, [])

  return (
    <>
      <div className="card-container_out567" style={{  overflowY: 'hidden' }}>
        <div className="card_out567 ">
          <div className="card-body567">
            <div className="globeprrow">
              <div className="globepr">
                {screenWidth > 950 && <img src={Globe1} style={{ width: "450px" }} className="imgglobe567" />}
              </div>
              <div className="prheadinf09">
                <h2 className="card-title_out567">
                  Prem Rawat
                  <br />
                  <div className="card-description_out567">
                    <br />
                    AMBASSADOR OF PEACE{" "}
                  </div>
                </h2>
              </div>
              <div className="globepr2">
                {screenWidth > 950 && <img src={Globe2} className="imgglobe567" style={{ width: "450px" }} />}
              </div></div>
          </div>
        </div>
      </div>

      {pr.map((item, i) => <section className="main-card--cointainer567">
        <div className="card-container1567">
          <div className="card1567 ">
            <div className="img1567">
              <p>

                {item.first_section_description}
              </p>
            </div>
          </div>
        </div>

        <div className="card-container2567">
          <div className="card2567 ">
            <div className="img2567">
              <img src={item.first_section_img} alt="img1567" />
            </div>
          </div>
        </div>

        <div className="card-container3567">
          <div className="card3567 ">
            <div className="img3567">
              <img src={item.second_section_img} alt="img2567" />
            </div>
          </div>
        </div>
        <div className="card-container4567">
          <div className="card4567 ">
            <div className="img4567">
              {item.thired_section_description}
            </div>
          </div>
        </div>

        <div className="card-container1567">
          <div className="card1567 ">
            <div className="img1567">
              {item.thired_section_description}
            </div>
          </div>
        </div>

        <div className="card-container2567">
          <div className="card2567 ">
            <div className="img2567">
              <img src={item.third_section_img} alt="img3567" />
            </div>
          </div>
        </div>

        <div className="card-container3567">
          <div className="card3567 ">
            <div className="img3567">
              <img src={item.fourth_section_img} alt="img4567" />
            </div>
          </div>
        </div>
        <div className="card-container4567">
          <div className="card4567 ">
            <div className="img4567">
              {item.fourth_section_description}
            </div>
          </div>
        </div>
        <div className="breakw"></div>

      </section>)}
    </>
  );
};

export default PR;
