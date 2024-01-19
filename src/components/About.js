import React, { useEffect } from "react";
import { useState } from "react";
export default function About(props) {
  const mystyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    border: "1px solid",
    borderRadius: "10px",
    borderColor: props.mode === "dark" ? "white" : "#042743",
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="mx-3 my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is a Text Editor which have the ability to Analyze Your Text
              According to Your Need.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This is a Completely free Text Editing Tool Build for Student.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              <strong>Browser Capability</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Text-Utils is a browser capable text editor which is executable in
              almost every browser you use in your daily life.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
