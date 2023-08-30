import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase", "primary");
  };
  const handleDownclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase", "success");
  };
  const ClearText = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("The TextBox Has Been Cleared", "warning");
  };
  const handleExtraSpaceclick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed", "dark");
  };

  const onchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("new text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(36 74 104)" : "white",

              color: props.mode === "light" ? "grey" : "gold",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-3 my-2"
          disabled={text.length === 0}
          onClick={handleUpclick}
        >
          Convert To UpperCase
        </button>

        <button
          className="btn btn-primary mx-3 my-2"
          disabled={text.length === 0}
          onClick={handleDownclick}
        >
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary mx-3 my-2"
          disabled={text.length === 0}
          onClick={ClearText}
        >
          Clear The Box
        </button>
        <button
          className="btn btn-primary mx-3 my-2"
          disabled={text.length === 0}
          onClick={handleExtraSpaceclick}
        >
          Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Paragraph Summary</h1>
        <p>
          <b>
            <em>
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </em>{" "}
            words and <em>{text.length}</em> characters
          </b>
        </p>
        <p>
          {" "}
          <b>
            <em>
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}
            </em>{" "}
            Minutes Reading Duration
          </b>
        </p>
        <h2>Preview</h2>
        <p>
          <i>{text.length > 0 ? text : "Nothing To Preview  "}</i>
        </p>
      </div>
    </>
  );
}
TextForm.prototype = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Enter Your Heading There",
};
