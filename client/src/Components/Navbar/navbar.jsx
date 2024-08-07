import React, { useEffect, useState } from "react";
import "./navbar.css";
import Search from "./SearchBar/Search";
import NavLogo from "./NavLogo/NavLogo";
import AppBox from "./AppBox/AppBox";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../Pages/Auth/Auth";
import { login } from "../../Action/Auth.js"
import { jwtDecode } from "jwt-decode";
import { setcurrentuser } from "../../Action/CurrUser.js";

function Navbar({ toggleDrawer, seteditcreatechanelbtn, setVidUploadPage }) {
  const [authbtn, setauthbtn] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState([]);
  const dispatch = useDispatch(); 

const CurrUser = useSelector((state) => state.currentuserreducer);
  const successlogin = () => {
      if (profile.email) {
        dispatch(login({ email: profile.email }));
        // console.log(profile.email);
      }
  };

// if (CurrUser) {
//   reloader = false;
//   console.log(user);
// window.location.reload();
// }

  const google_login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setUser(tokenResponse);
    },
    onError: (error) => console.log("Login Failed", error),
  });

  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
           successlogin();
        })
        .catch((err) => {
          console.error("Error fetching user info:", err);
        });
    } else {
      console.log("User or access token is null or undefined");
    }
  }, [user]);

    const logout = () => {
      dispatch(setcurrentuser(null));
      googleLogout();
      localStorage.clear();
    };
    useEffect(() => {
      const token = CurrUser?.token;
      if (token) {
        const decodetoken = jwtDecode(token);
        if (decodetoken.exp * 1000 < new Date().getTime()) {
          logout();
        }
      }
      dispatch(setcurrentuser(JSON.parse(localStorage.getItem("profile"))));
    }, [CurrUser?.token, dispatch]);
  

  return (
    <>
      <div className="navbarContainer">
        <div className="navLogoContainer">
          <NavLogo toggleDrawer={toggleDrawer} />
        </div>
        <div className="navSearch">
          <Search />
        </div>
        <div className="navAppBox">
          <AppBox />
          <div className="AuthUser">
            {CurrUser ? (
              <div className="chennelLogo" onClick={() => setauthbtn(true)}>
                <p className="firstLetterLogo">
                  {CurrUser.result.name
                    ? CurrUser.result.name.charAt(0).toUpperCase()
                    : CurrUser.result.email.charAt(0).toUpperCase()}
                </p>
              </div>
              
            ) : (
              <div className="profile" onClick={() => google_login()}>
                <i className="fa-solid fa-user"></i>
                <p>Sign in</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {authbtn && (
        <Auth
          user={CurrUser}
          setAuthBtn={setauthbtn}
          seteditcreatechanelbtn={seteditcreatechanelbtn}
        />
      )}
    </>
  );
}

export default Navbar;
