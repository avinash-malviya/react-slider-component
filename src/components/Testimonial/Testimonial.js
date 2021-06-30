import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./TestimonialCard";
import PreviousBtn from "./PreviousBtn";
import NextBtn from "./NextBtn";
import Photo from "./UserPhoto";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div>
        <Photo key={i} avatarUrl={users[i].avatar} />
      </div>
    ),
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadUser = async () => {
      const request = await axios.get(
        "https://testimonialapi.toolcarton.com/api"
      );
      setUsers(request.data);
    };
    loadUser();
  }, []);
  return (
    <div className="container">
      <div className="white-container">
        <div className="testimonial">
          <div className="main">
            <h6 className="title">TESTIMONIALS</h6>
            <Slider
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              {...settings}
            >
              {users.map((user) => {
                return (
                  <div key={user.id}>
                    <Card
                      message={user.message}
                      lorem={user.lorem}
                      name={user.name}
                      designation={user.designation}
                      location={user.location}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
