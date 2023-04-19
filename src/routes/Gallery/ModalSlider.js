import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { Modal } from 'antd';

const ModalSlider = (props) => {
    const modalStyle = {
        paddingLeft: '0px',
        backgroundColor: 'transparent',
        
      };
    
    return (
        <div  >
             <Modal
      visible={props.visible}
      onCancel={props.handleCancel}
      closable={true}
      footer={null}
      style={modalStyle}
      width="70%"
      height= {600}
      centered={true}
    >

            <div style={{width:"100%",height:"100%"}}>
                <img src={props.value} alt="loading..." style={{width:"100%",height:"100%"}}/>
            </div>
 
            </Modal>
        </div>
    );
};

export default ModalSlider;
