import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {onAuthStateChanged} from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import {toggleGptSearchView} from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store =>store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch); 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ... redirect to browse page upon successful login
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // to unregister the onAuthSateChanged, need to write the return function(unmount(unsubscribe the coomponent))
    // Unsubscribe when componnet unmounts 
    return () => unsubscribe();
  }, []);
  const handleGPTSearchClick = () => {
    //Toggle GPT Search functionality
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) =>{
    //Change language
//console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-20"
        src={LOGO}
        alt="logo"
      />

     {user && ( 
      <div className="flex p-2 justify-between">
      {showGptSearch && <select className="bg-black text-white rounded-md p-2 m-2 mx-4 my-4" onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.indentifier} value={lang.indentifier}>
            {lang.name.toUpperCase()}
          </option>
        ))    
        }  
      </select>
      }
        <button onClick={handleGPTSearchClick} className="py-2 px-4 m-2 mx-4 my-4 rounded-lg bg-purple-800 text-white">
        
        {showGptSearch ? "Homepage" : "GPT Search"}  
          
         </button>
        <img
          className="w-12 h-12"
          alt="userIcon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className="text-white font-bold">
          (Sign Out)
        </button>
      </div>
      )}
    </div>
    
  );
};

export default Header;
