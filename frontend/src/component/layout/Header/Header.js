import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction"; 
import logo from "../../../images/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login"); 
  };

  const options = {
    burgerColorHover: "#eb4034",
    logo,
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: isAuthenticated ? "/" : "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
  };

  return (
    <>
      <ReactNavbar {...options} />
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          style={{
            position: "absolute",
            right: "2vmax",
            top: "2vmax",
            padding: "0.6vmax 1vmax",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#eb4034",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      )}
    </>
  );
};

export default Header;
