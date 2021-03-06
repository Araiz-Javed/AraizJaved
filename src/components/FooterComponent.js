import React from "react";
import { Link } from "react-router-dom";
import {
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/Contactus">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg"></i>
              <FontAwesomeIcon icon={faPhone} /> : +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>
              <FontAwesomeIcon icon={faPhone} /> : +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>
              <FontAwesomeIcon icon={faEnvelope} /> :{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a target="_blank" href="http://www.facebook.com/profile.php?id=">
                <FacebookIcon size={35} />
              </a>
              <a target="_blank" href="http://www.linkedin.com/in/">
                <LinkedinIcon size={35} />
              </a>
              <a target="_blank" href="http://twitter.com/">
                <TwitterIcon size={35} />
              </a>
              <a target="_blank" href="mailto:">
                <EmailIcon size={35} />
              </a>

              {/* <a className="btn btn-primary" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" ><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" ><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" ><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" ><i className="fa fa-envelope-o"></i></a> */}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <p>?? Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
