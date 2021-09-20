import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography>Abhishek Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
