import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../services/apiService";
import "./NewsBlog.css";

export default function NewsBlog() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [news, setNews] = useState("");
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/api/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [id]);
  console.log(news);
  return (
    <div className="singlePost" style={{ paddingTop: "114px" }}>
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={news?.image} alt="No Ima" />
        <h1 className="singlePostTitle">
          {news?.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>Author: {news?.author}</span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">{news?.details}</p>
        <div style={{ textAlign: "center" }}>
          <b className="singlePostAuthor">
            <a href={news?.news_document} target="_blank" rel="noreferrer">
              Download Pdf
            </a>
          </b>
        </div>
      </div>
    </div>
  );
}
