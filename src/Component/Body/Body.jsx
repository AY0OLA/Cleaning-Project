import "./Body.css";
import React, { useEffect } from "react";
import { FaHouse } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const Body = () => {
  const Data = [
    {
      id: 1,
      header: `Recurring Cleaning`,
      discription: `We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.`,
      click: `Learn More.`,
    },
    {
      id: 2,
      header: `Occasional Cleaning`,
      discription: `Needs that do not necessarily mean you have a party planned or awaiting a special occasion, or expecting guests.`,
      click: `Learn More.`,
    },
    {
      id: 3,
      header: `Apartment Cleaning`,
      discription: `We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.`,
      click: `Learn More.`,
    },
    {
      id: 4,
      header: `Refrigerator Cleaning`,
      discription: `Rid of some memories or people to make room for new ones. Some of your loved ones have disappointed.`,
      click: `Learn More.`,
    },
    {
      id: 5,
      header: `Housekeeping Services`,
      discription: `Management of duties and chores involved in the running of a household, such as cleaning, cooking.`,
      click: `Learn More.`,
    },
    {
      id: 6,
      header: `Oven Cleaning`,
      discription: `Cleaning product designed or labeled to clean and to remove dried or baked on food deposits from oven walls.`,
      click: `Learn More.`,
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div data-aos="fade-up" className="Body">
        <h1 data-aos="fade-right">
          <span>--</span>best services
        </h1>
        <div data-aos="fade-up" className="Our">
          <h3 data-aos="fade-right">What Our Services</h3>
          <div data-aos="fade-up" className="more">
            <div data-aos="fade-up" className="text ">
              <span>
                While we can customize your cleaning plan to suit your
              </span>
              <span>
                needs, most clients schedule regular cleaning services:
              </span>
            </div>
            <a className="btn">
              See More
              <IoIosArrowRoundForward className="arrow" />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="bodygride">
          {Data.map(({ id, header, discription, click }) => {
            return (
              <div data-aos="fade-up" key={id} className="Destination">
                <div className="house">
                  <FaHouse className="home" />
                </div>

                <div className="dics">
                  <div className="head">{header}</div>
                  <div className="discription">{discription}</div>

                  <div className="clic">
                    <a href="#">{click}</a>
                    <div className="forward">
                      <IoIosArrowRoundForward />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Body;
