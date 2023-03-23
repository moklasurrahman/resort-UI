import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import "./navbar.scss";
import Navmain from "./navMain/Navmain";


const Navbar = () => {



  return (
    <div className="navbarSection">
      <div className="topNav">
        <div className="topnavitem">
          <div className="left">
            <div className="call">
            <CallIcon className="icon" />
            <span>+8801762554444</span>
            </div>
            <div className="mail">
            <MailOutlineIcon className="icon" />
            <span>dhakadreamlandpark@gmail.com</span>
            </div>
          </div>

          <div className="right">
            <div className="linkicon">
              <FacebookOutlinedIcon className="icon" />
              <InstagramIcon className="icon" />
              <LinkedInIcon className="icon" />
              <TwitterIcon className="icon" />
            </div>

            <div className="btn">
              <button className="login">
                <LockOutlinedIcon className="loginicon" /><span>Login</span>
              </button>
              
              <button className="signup">
                <PermIdentityOutlinedIcon className="signupicon" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="navbarMain">
          <Navmain/>
      </div>


    </div>
  );
};

export default Navbar;
