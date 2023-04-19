import React, { useEffect, useState } from "react";
import { BsShare } from "react-icons/bs";
import { CgMailForward } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "../../services/apiService";
import "./News.css";

const getDate = (date) => {
  const dateObj = new Date(date);
  const options = { month: "long", year: "numeric", day: "numeric" };
  const dateString = dateObj.toLocaleString("en-US", options);

  return dateString;
};

const News = () => {
  window.scrollTo(0, 0);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/news/");

        setNews(response.data);
      } catch (error) {
     
      }
    };

    fetchNews();
  }, []);
  const len = news.length;
  return (
    <div className="newss01" style={{ paddingTop: "0px" }}>
      <div className="card-container_out911">
        <div className="card_out911 ">
          <div className="card-body911">
            <h2 className="card-title_out911">
              News & Articles
              <br />
              <div className="card-description_out911">
                <br />
                To Get More Updates on the Activities, Read Here...
              </div>
            </h2>
          </div>
        </div>
      </div>

      <section className="main-card--cointainer911">
        {news.sort((a,b)=>(new Date(b.created_at)-new Date(a.created_at))).map((news) => (
          <div className="card-container911" key={news.id}>
            <div className="card911 ">
              <div className="card-body911">
                <div className="share911">
                  <BsShare size={20} />
                </div>
                <div className="card-title911"> {news.title}</div>
              </div>
              <div className="img911">
                <img src={news.image} alt="News" />
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  float: "left",
                  fontFamily: "Open Sans",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#000000",
                  marginTop: "15px",
                }}
              >
                {/* <a href="/">
                  <p
                    className="recentcontent023"
                    onClick={() => navigate(`/newsblog/${news.id}`)}
                  >
                    {" "}
                    Read More
                    <CgMailForward style={{ marginLeft: "8px" }} />
                  </p>
                </a> */}
                <Link to={`/newsblog/${news.id}`} style={{ color: "#000000" }}>
                  Read More
                </Link>
                <CgMailForward style={{ marginLeft: "8px" }} />
              </div>
              <div className="date911">{getDate(news.created_at)}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="main-card--cointainer-head911">
        <div className="card-title-last1911"> Recent News </div>
      </section>
      <section className="main-card--cointainer-bottom911">
        {news.map((item, i) => (
          <div className="card-container-last911">
            <div className="card-last911 ">
              <div className="card-body-last911">
                <div className="recentnews09">
                  <div className="img-last911">
                    {" "}
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="recentreadmore09">
                  <div className="spreadmessage09">
                    <p className="recentcontent01">{item.title}</p>
                    <p className="recentcontent02">
                    <Link to={`/newsblog/${item?.id}`} style={{ color: "#000000" }}>
                  Read More
                </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="main-card--cointainer-head911">
        <div className="card-title-last1911"> Top News </div>
      </section>
      <section className="main-card--cointainer-bottom911">
        {news.slice(len - 4, len).map((item, i) => (
          <div className="card-container-last911">
            <div className="card-last911 ">
              <div className="card-body-last911">
                <div className="recentnews09">
                  <div className="img-last911">
                    {" "}
                    <img src={item.image} alt="" style={{ height: "100px" }} />
                  </div>
                </div>
                <div className="recentreadmore09">
                  <div className="spreadmessage09">
                    <p className="recentcontent01">{item.title}</p>
                    <p className="recentcontent02">
                    <Link to={`/newsblog/${item?.id}`} style={{ color: "#000000" }}>
                  Read More
                </Link>
                      
                    
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default News;
