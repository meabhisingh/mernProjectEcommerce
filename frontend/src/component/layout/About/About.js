// src/components/About/About.jsx
import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

// CardNav imports
import CardNav from "../CardNav/CardNav";
import logo from "../CardNav/logo.svg"; // adjust path if needed

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };

  // items for CardNav (you can tune colors)
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#" },
        { label: "Careers", ariaLabel: "About Careers", href: "#" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" }
      ]
    }
  ];

  return (
    <div className="aboutSectionWrapper">
      {/* CardNav sits above the about content.
          Use baseColor to invert the nav background if needed */}
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#ffffff"        // nav background color (page base)
        menuColor="#000000"        // hamburger + icon color
        buttonBgColor="#111"       // CTA button bg
        buttonTextColor="#fff"     // CTA button text
        ease="power3.out"
      />

      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>

        {/* Keep your existing layout */}
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
                rel="noreferrer"
              >
                <YouTubeIcon className="youtubeSvgIcon" />
              </a>

              <a href="https://instagram.com/meabhisingh" target="blank" rel="noreferrer">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
