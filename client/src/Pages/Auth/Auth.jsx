import React from "react";
import "./Auth.css";
import { NavLink } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setcurrentuser } from "../../Action/CurrUser";

function Auth({ user, setAuthBtn, seteditcreatechanelbtn }) {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setcurrentuser(null));
    localStorage.clear();
    googleLogout();
    window.location.reload();
    
  };
  return (
    <div className="AuthContainer" onClick={() => setAuthBtn(false)}>
      <div className="AuthContainer2">
        <p className="userDetails">
          <div className="chennelLogo">
            <p className="firstLetterLogo">
              {user.result.name ? (
                <>{user.result.name.charAt(0).toUpperCase()}</>
              ) : (
                <>{user.result.email.charAt(0).toUpperCase()}</>
              )}
            </p>
          </div>
          <div className="emailAuth"> {user.result.email}</div>
        </p>
        <div className="AuthBtn"> 
          {user.result.name ? (
            <>
              {
                <NavLink className="BtnAuth" to={`/chennal/${user.result._id}`}>
                  Your Chennel
                </NavLink>
              }
            </>
          ) : (
            <>
              <input
                type="submit"
                className="BtnAuth"
                value="Create Your Own Channel"
                onClick={() => seteditcreatechanelbtn(true)}
              />
            </>
          )}

          <div>
            <div className="BtnAuth" onClick={() => logout()}>
              Log Out &nbsp;
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
