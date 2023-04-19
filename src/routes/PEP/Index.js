import { Col, Row } from 'antd';
import React from 'react';
import imgs from './main.png'
import './PEP.css'
const Pep = () => {
    return (
        <div className='pep0' style={{}}>
            <Row gutter={[14, 14]}  >
                <Col  sm={12} xs={24}>
                    <div className='pep1'  >
                    <h3 className='pep2' >Peace Education Program</h3>
                    <img src={imgs} alt="loading ..." style={{zIndex:" ",width:"100%",height:"60%"}}/>
                     
                    </div>
                     </Col>
                <Col  sm={12} xs={24}> 
                <p className='pep3'>
                The Peace Education Program (PEP) consists of 10 sessions, each focusing on a particular theme. These customized, interactive workshops are non-religious and non-sectarian. The content of each theme is based on excerpts from Prem Rawat’s international talks. The themes are Peace, Appreciation, Inner Strength, Self-Awareness, Clarity, Understanding, Dignity, Choice, Hope, and Contentment.
                </p>
                </Col>
            </Row>
        </div>
    );
};

export default Pep;