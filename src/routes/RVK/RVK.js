import "./RVK.css";
import L1 from "./L1.png";
import L2 from "./L2.png";
import L3 from "./L3.png";
import React, { useEffect, useState } from "react";
import { CgMailForward } from "react-icons/cg";
import axios from "../../services/apiService";
import { Link } from "react-router-dom";

const First = () => {
  // window.scrollTo(0,0)
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
  let [ban, setBan] = useState([]);
  useEffect(() => {
    axios.get("/api/rvkaboutbanner/").then((res) => {
      setBan(res.data);
    });
  }, []);

  // rvk description code is here
  let [des, setDes] = useState([]);
  useEffect(() => {
    axios.get("/api/rkbaboutdescription/").then((res) => {

      setDes(res.data);
    });
  }, []);

  //  quick link code is here
  let [links, setLinks] = useState([]);
  useEffect(() => {
    axios.get("/api/quicklinkview/").then((res) => {
      setLinks(res.data);
    });
  }, []);

  // read quiclink read more button
  const [read, setRead] = useState({
    id: null,
  });

  const handleClick = (id) => {
    if (read.id === id) {
      setRead({
        id: null,
      });
    } else {
      setRead({
        id: id,
      });
    }
  };
  const handleClick3 = () => {
    window.open("https://www.anjan.tv/");
  };
  const handleClick1 = () => {
    window.open("https://www.premrawat.com/");
  };
  const handleClick2 = () => {
    window.open("https://www.rvkproducts.com/");
  };
  return (
    <div className="maincontmargin456" >
      <div className="card-container_out456">
        <div className="card_out456 " style={{}}>
          <div className="card-body456">
            <div>
              <h2 className="card-title_out456">
                {ban[0]?.title}
                <br />
                <div className="card-description_out456">
                  <br />
                  {ban[0]?.sub_title}
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {des.map((item, i) => (
        <div>
          <section className="main-card--cointainer456">
            <div className="card-container1456">
              <div className="card1456 ">
                <div className="img1456">
                  <p>
                    <span>Raj Vidya Kender</span>
                    {item.first_section_description}
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="card-container2456">
              <div className="card2456 ">
                <div className="img2456">
                  <img src={item.first_section_img} alt="img1456" style={{height:"450px"}} />
                </div>
              </div>
            </div>

            <div className="card-container3456">
              <div className="card3456 ">
                <div className="img3456">
                  <img src={item.second_section_img} alt="img2456" />
                </div>
              </div>
            </div>
            <div className="card-container4456">
              <div className="card4456 ">
                <div className="img4456">
                  <p>
                    <span>For the people by the people</span>
                    {item.second_section_description}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div>
            <p className="last456">
              <span>Peace Education Program-From Darkness into Light</span>
              <br />
              {item.thired_section_description}
            </p>
          </div>
        </div>
      ))}

      <div className="break456"></div>
      <div className="quick456">Quick Links</div>
      <section className="main-card--cointainer11456">
      <div className="card-container11456">
        <div className="card11456 ">
          <div className="card-body11456">
            <div className="imageD456">
              <img src={L1} alt="img" />
            </div>
            <div className="card-title11456">
              {" "}
              Anjan TV is a revolutionary general entertainment channel
              conceptualized to see inside the heart of Humanity and offer
              oodles of unlimited entertainment, be it be of mind or soul.{" "}
            </div>
            <button className="button456" onClick={handleClick3} >Know More<CgMailForward style={{marginLeft:"7px"}}/></button>
          </div>
        </div>
      </div>

      <div className="card-container11456">
        <div className="card11456 ">
          <div className="card-body11456">
            <div className="imageD2456">
              <img src={L2} alt="img" />
            </div>
            <div className="card-title114561">
              {" "}
              The official website of Prem Rawat and his work promoting peace,
              well-being, self-knowledge and understanding.{" "}

            </div>
            <button className="button456" onClick={handleClick1}>Know More<CgMailForward style={{marginLeft:"7px"}}/></button>
          </div>
        </div>
      </div>

      <div className="card-container11456">
        <div className="card11456 ">
          <div className="card-body11456">
            <div className="imageD2456">
              <img src={L3} alt="img" />
            </div>
            <div className="card-title11456">
              {" "}
              RVK Products operates as an e-commerce platform facilitating the acquisition of Inspirational Video DVDs, Bhajan CDs, and other publication items including books, magazines, and journals.{" "}

            </div>
            <button className="button456" onClick={handleClick2}>Know More<CgMailForward style={{marginLeft:"7px"}}/></button>
          </div>
        </div>
      </div>
    </section>
      <div className="break456"></div>
    </div>
  );
};

export default First;
