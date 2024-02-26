import React, { useEffect } from "react";
import "./Footer.css";
import { MdCleaningServices } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="FooterCard">
      <div data-aos="fade-up" className="information">
        <div className="input">
          <span className="name">Name:</span>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="email">
          <span className="Email">Email*</span>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="Message">
          <span className="message">Message</span>
          <textarea
            name=""
            placeholder="Your Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <a href="#" className="btn">
          Book A Schedule
        </a>
      </div>
      <div data-aos="fade-up" className="service ">
        <div data-aos="fade-up" className="serContent">
          <div className="about">
            <span className="company">Best Cleaning</span>
            <span className="company">Service Company</span>
          </div>
          <div className="next">
            <span>
              Quisque imperdiet mauris nec faucibus vestibulum. Ut vestibulum
              est ac hendrerit pharetra. Integer sit amet laoreet lectus
            </span>
          </div>
          <a href="#" className="btn">
            Appointment
          </a>
        </div>
        <div data-aos="fade-up" className="Seccall">
          <div className="clean">
            <div className="heading">
              <MdCleaningServices className="icon" />
              Cleanzer
            </div>
            <div className="us">
              <span>
                We Are Premium Cleaning Company in USA ready to make your life
                easier!!
              </span>
            </div>
            <div className="ico">
              <FaFacebookF className="fa" />
              <FaXTwitter className="fa" />
              <FaInstagram className="fa" />
              <FaYoutube className="fa" />
            </div>
          </div>
          <div className="navigator">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="Links">
            <h3>Quick Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Disclaimer</li>
              <li>Faq</li>
            </ul>
          </div>
          <div className="company">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FaPhone className="con" />
                123-456-7890
              </li>
              <li>
                <IoIosMail className="con" />
                info@companyemail.com
              </li>
              <li>
                <IoLocationSharp className="con" />
                1111 Avenue Francis Road, Laval, USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
