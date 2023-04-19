import React, { useState, useEffect } from 'react';
import FooterD from './FooterD.js';
import FooterM from './FooterM.js';
import axios from '../../services/apiService';
import { toast } from 'react-hot-toast';
function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 668);
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [email,setEmail] = useState('')
   
   const handleSubscribe = () =>{
     axios.post("/api/newsshelter/",{ email})
     .then(res=>{
        toast.success(<h1>Subscribe Email</h1>)
     })
     .catch(err=>{
      toast.error(err.data.detail)
     })
   }

  return (
    <div>
      {isMobile ? <FooterM handleSubscribe={handleSubscribe} setEmail={setEmail}/> : <FooterD handleSubscribe={handleSubscribe} setEmail={setEmail}/>}
    </div>
  );
}

export default Footer;
