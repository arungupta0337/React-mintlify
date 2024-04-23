import React from 'react'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const mintlifyAppLink = "http://localhost:3001/get-started/introduction";

const Auth = () => {
   const [cookies, setCookie, removeCookie] = useCookies([]);
   const isNotSignIn=!cookies['__Secure-next-auth.session-token']  //Read the session token cookie
   const handleRedirect = () => {
   //   window.location.href = process.env.REACT_APP_AUTH_URL;
     window.location.href = "https://www.google.com/";
   };
   return (
       <div className="App">
         <div className="container">
           {isNotSignIn?
             handleRedirect() // If session token cookie is not present redirect to appsecAuth
           :
           <Link to={mintlifyAppLink}>
           </Link>}
         </div>
       </div>
   );
}

export default Auth