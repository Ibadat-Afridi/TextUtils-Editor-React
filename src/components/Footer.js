import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        height: "50px",
        color: "orange",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        fontSize: "25px",
      }}
    >
      All Right Reserved
      <span>&copy;</span>
      <Link
        to="https://github.com/Ibadat-Afridi"
        target="_blank"
        style={{
          color: "",
          textDecoration: "none",
          fontWeight: "500",
          fontStyle: "italic",
        }}
      >
        Ibadat-Afridi
      </Link>
    </div>
  );
};

export default Footer;
