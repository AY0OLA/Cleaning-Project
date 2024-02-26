import React, { useEffect } from "react";
import "./Mains.css";
import { FaRegFileAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
const Mains = () => {
  const Data = [
    {
      id: 1,
      Num: `1820+`,
      note: `Clean Houses`,
    },
    {
      id: 2,
      Num: `25+`,
      note: `Glorius Years`,
    },
    {
      id: 3,
      Num: `750+`,
      note: `Active Clients`,
    },
    {
      id: 4,
      Num: `55+`,
      note: `Team Advisor`,
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="Mains ">
        <h1 data-aos="fade-right">-- Get our Service</h1>
        <div data-aos="fade-up" className="secContent">
          <div className="first ">
            <h2 data-aos="fade-up">How To Get Our Service</h2>

            <div data-aos="fade-up" className="singleDestination">
              <div className="one">
                <div className="fileIcon">
                  <FaRegFileAlt />
                </div>
                <div className="file">
                  <span className="heading">Choose Your Time</span>
                  <span className="discription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
              <div className="one">
                <div className="fileIcon">
                  <FaRegFileAlt />
                </div>
                <div className="file">
                  <span className="heading">Choose Your Time</span>
                  <span className="discription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
              <div className="two">
                <div className="fileIcon">
                  <FaRegFileAlt />
                </div>
                <div className="file">
                  <span className="heading">Choose Your Time</span>
                  <span className="discription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="second">
            <img src="src/image/new.png" alt="clearner" className="replace" />

            <div data-aos="fade-up" className="house">
              <img src="src/image/new2.png" alt="" className="home" />
              <div data-aos="fade-up" className="state">
                <strong>Fringilla scelerisque</strong> in imperdiet nisi erat in
                id. Vel fermentum aenean aenean id ornare vitae sapien nulla
                auctor. At nisl sem eget orci pretium sed.
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="secondSec">
          <span data-aos="fade-up">
            We Make Sanitizing Services Simple And Easy For You
          </span>
          <div data-aos="fade-up" className="than">
            <span>More Than Just Cleaning</span>
          </div>
        </div>
        <div data-aos="fade-up" className="Secsecond">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            sollicitudin sem. Ut tempus ligula eget vestibulum dapibus. Sed ac
            pulvinar massa. Class aptent
          </span>
        </div>
        <div data-aos="fade-up" className="data">
          {Data.map(({ id, Num, note }) => {
            return (
              <div key={id} className="numbers ">
                <div className="Note">
                  <div className="Num">{Num}</div>
                  <div className="note">{note}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div data-aos="fade-up" className="footer">
          <div data-aos="fade-up" className="client section">
            <h3 data-aos="fade-up">--Happy clients</h3>
            <span data-aos="fade-up">What Our Client Say’s</span>
            <div data-aos="fade-up" className="text">
              This is what clients have been saying after using the great
              service we do for clients.
            </div>
            <div data-aos="fade-up" className="return">
              <div className="returnContent">
                <div className="returnSpace">
                  <div className="icon">
                    <FaQuoteRight />
                  </div>
                  <span className="info">
                    “I love that I can spend more time with my husband,
                    children, and family, and less time stressing over getting
                    my house clean.”
                  </span>
                  <div className="profile">
                    <img src="src/image/cilent.png" className="photo" />
                    <div className="group">
                      <div className="name">
                        <span className="Name">Nazmi Javier</span>
                        <span className="person">Househusband</span>
                      </div>
                      <div className="stars">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="returnContent">
                <div className="returnSpace">
                  <div className="icon">
                    <FaQuoteRight />
                  </div>
                  <span className="info">
                    “This is by far the simplest, most frictionless,
                    easiest-to-get-going platform that I’ve ever worked in. Just
                    being able to upload a link and bounce”
                  </span>
                  <div className="profile">
                    <img src="src/image/cilent2.png" className="photo" />
                    <div className="group">
                      <div className="name">
                        <span className="Name">Chintya Xin</span>
                        <span className="person">Housewife</span>
                      </div>
                      <div className="stars">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="returnContent">
                <div className="returnSpace">
                  <div className="icon">
                    <FaQuoteRight />
                  </div>
                  <span className="info">
                    “This is by far the simplest, most frictionless,
                    easiest-to-get-going platform that I’ve ever worked in. Just
                    being able to upload a link and bounce”
                  </span>
                  <div className="profile">
                    <img src="src/image/cilent3.png" className="photo" />
                    <div className="group">
                      <div className="name">
                        <span className="Name">Braun Yes</span>
                        <span className="person">CEO Of Arcane</span>
                      </div>
                      <div className="stars">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="contact section">
            <div data-aos="fade-up" className="secContact">
              <h1 data-aos="fade-right">--CONTACT</h1>
              <div data-aos="fade-up" className="span">
                <span className="touch">Get In Touch</span>
                <span className="team">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </span>
              </div>
              <div data-aos="fade-up" className="call">
                <div className="means">
                  <div className="phone">
                    <FaPhone />
                  </div>
                  <div className="digit">
                    <span className="num">Phone</span>
                    <span className="Num">123-456-7890</span>
                  </div>
                </div>
                <div className="means">
                  <div className="phone">
                    <IoIosMail />
                  </div>
                  <div className="digit">
                    <span className="num">Heading</span>
                    <span className="Num">info@companyemail.com</span>
                  </div>
                </div>
                <div className="mean">
                  <div className="phone">
                    <IoLocationSharp />
                  </div>
                  <div className="digit">
                    <span className="num">Location</span>
                    <span className="Num">
                      1111 Avenue Francis Road, Laval, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
              <a href="#" className="button">
                Book A Schedule
              </a>
            </div>
          </div>
          <div data-aos="fade-up" className="service ">
            <div className="serContent">
              <div className="about">
                <span className="company">Best Cleaning</span>
                <span className="company">Service Company</span>
              </div>
              <div className="next">
                <span>
                  Quisque imperdiet mauris nec faucibus vestibulum. Ut
                  vestibulum est ac hendrerit pharetra. Integer sit amet laoreet
                  lectus
                </span>
              </div>
              <a href="#" className="button">
                Appointment
              </a>
            </div>
          </div>
          {/* <div data-aos="fade-up" className="Seccall">
            <div data-aos="fade-up" className="clean">
              <div className="heading">
                <MdCleaningServices className="icon" />
                <h4>Cleanzer</h4>
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
            <div data-aos="fade-up" className="navigator">
              <h3>Navigation</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div data-aos="fade-up" className="Links">
              <h3>Quick Links</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Disclaimer</li>
                <li>Faq</li>
              </ul>
            </div>
            <div data-aos="fade-up" className="company">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Mains;
