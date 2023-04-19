import { Col, Row } from 'antd';
import axios from '../../services/apiService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuickDetails = () => {
    let [links, setLinks] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        axios.get(`/api/quicklinkview/${id}`).then((res) => {
          console.log(res);
            setLinks(res.data);
          });
    }, []);
  
    return (
        <div className="maincontmargin456" >
        <div className="card-container_out456">
          <Row>
            <Col xs={24}>
              <img src={links?.image} style={{width:"100%",height:"500px"}} alt='loading...'/>
            </Col>
            <Col xs={24}>
               <p>{links?.description}</p>
            </Col>
          </Row>
        </div>
        </div>
    );
};

export default QuickDetails;