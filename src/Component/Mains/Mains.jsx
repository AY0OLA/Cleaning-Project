import React, { useEffect } from "react";
import "./Mains.css";
import { FaRegFileAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
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
      <div className="MaIns ">
        <h1 data-aos="fade-right">-- Get our Service</h1>
        <div data-aos="fade-up" className="secCOntent">
          <div data-aos="fade-up" className="first ">
            <h2 data-aos="fade-right">How To Get Our Service</h2>

            <div data-aos="fade-up" className="singleDEstination">
              <div data-aos="fade-up" className="one">
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
              <div data-aos="fade-up" className="one">
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
              <div data-aos="fade-up" className="two">
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
            <img src="/src/image/new.png" alt="clearner" className="replace" />

            <div className="house">
              <img src="/src/image/new2.png" alt="" className="home" />
              <div className="state">
                <strong>Fringilla scelerisque</strong> in imperdiet nisi erat in
                id. Vel fermentum aenean aenean id ornare vitae sapien nulla
                auctor. At nisl sem eget orci pretium sed.
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="secondSec">
          <span>We Make Sanitizing Services Simple And Easy For You</span>
          <div className="than">
            <span>More Than Just Cleaning</span>
          </div>
        </div>
        <div className="Secsecond">
          <span data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            sollicitudin sem. Ut tempus ligula eget vestibulum dapibus. Sed ac
            pulvinar massa. Class aptent
          </span>
        </div>
        <div className="data">
          {Data.map(({ id, Num, note }) => {
            return (
              <div key={id} className="numbers " data-aos="fade-up">
                <div className="Note">
                  <div className="Num">{Num}</div>
                  <div className="note">{note}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <div data-aos="fade-up" className="client">
            <h3>--Happy clients</h3>
            <span>What Our Client Say’s</span>
            <div className="text" data-aos="fade-right">
              This is what clients have been saying after using the great
              service we do for clients.
            </div>
            <div className="return" data-aos="fade-up">
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
                    <img src="/src/image/cilent.png" className="photo" />
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
                    <img src="/src/image/cilent2.png" className="photo" />
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
                    <img src="/src/image/cilent3.png" className="photo" />
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
          <div className="contact">
            <h1 data-aos="fade-right">--CONTACT</h1>
            <div className="secContact">
              <div className="span" data-aos="fade-up">
                <span className="touch">Get In Touch</span>
                <span className="team">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </span>
              </div>
              <div className="call" data-aos="fade-up">
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
                <div className="means">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mains;
