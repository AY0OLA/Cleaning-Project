import React, { useEffect } from "react";
import "./Links.css";
import { MdArrowOutward } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Links = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="links">
      <div data-aos="fade-up" className="homeContainer">
        <div data-aos="fade-up" className="object">
          <span data-aos="fade-up" className="service">
            Professional Cleaning Service
          </span>

          <div className="text" data-aos="fade-up">
            <span>We Are Premium Cleaning</span>
            <span>Company located in USA ready</span>
            <span>to make your life easier!!</span>
          </div>
          <span data-aos="fade-up" className="content">
            At Cleanzer Crystal Clean, we believe in building a relationship
            with every one of our customers. Our cleaning programs are tailored
            to meet your needs. We don't believe in a one size fits all
            approach. Need us to wash dishes? Do laundry? Make the beds? Not a
            problem!
          </span>

          <div data-aos="fade-up" className="click">
            <button className="icon">
              Book A Schedule <MdArrowOutward />
            </button>
            <button className="offer">
              Our Best Offer <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
