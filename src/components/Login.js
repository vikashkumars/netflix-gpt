import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm =() =>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/US-en-20250929-TRIFECTA-perspective_aacb0ca6-a123-4989-8138-ed5181752e30_large.jpg"
          alt="bg"
        />
      </div>

      <form className="w-3/12 absolute p-12 text-white bg-black my-36 mx-auto right-0 left-0 bg-opacity-40">
        <h1 className="font-bold text-xl py-4">
            {isSignInForm ?"Sign In":"Sign Up"} 
        </h1>
        {!isSignInForm && (<input type="text" placeholder="Full Name " className="p-4 my-4 w-full bg-gray-600"/>)}
        <input type="text" placeholder="Email Address " className="p-4 my-4 w-full bg-gray-600" />
        <input type="password" placeholder="Password " className="p-4 my-4 w-full bg-gray-600"/>
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg ">
           {isSignInForm ?"Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> 
            {isSignInForm ?"New to NetFlix? Sign Up Now":"Already registered? Sign In Now"}
            </p>
      </form>
      
    </div>
  );
};

export default Login;
