import React, { useState, useEffect } from 'react';
import {useSearchParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Verifyuser from './verfiyuser.css';
import axios from 'axios';

function VerifyUser() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [userVerified, setUserVerified] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyAccount = async () => {
          try {
            const response = await axios.post('/api/accounts/verify-user/', {token:token});

            setLoading(false)
            setUserVerified(true);

          } catch (error) {
            
            setLoading(false)
          }
        };

        verifyAccount();

      }, []);

  return (
    <div>
     {!loading && userVerified?
     <div>
        <h3>
        <div className="card619">
        <div className='confirmation'> Welcome!</div>
         <div className='message-success'>You have successfully logged in.</div>
         <div className='explore'>Explore...</div>
       </div>
       <Link to="login">Login here</Link></h3>
     </div>:null}

    {!loading && !userVerified?
     <div>Invalid link please request for another one</div>:null}
    </div>
  );
}

export default VerifyUser;
