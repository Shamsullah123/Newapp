import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter Text");

  const handleUpClick = () => {
    console.log("Upper case was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showaltert("converted to Upper Case", "success");
  };
  const handleLowerClick = () => {
    console.log("Upper case was clicked" + text);
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showaltert("converted to Lower Case", "success");
  };
  const handleClearClick = () => {
    console.log("Upper case was clicked" + text);
    let newtext = "";
    setText(newtext);
  };
  const handleReviseClick = () => {
    console.log("Upper case was clicked" + text);
    let newtext = text.split("").reverse().join("");
    setText(newtext);
  };
  const handleTextChange = (event) => {
    console.log("onChanged");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === `dark` ? `white` : `black`,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            rows="8"
            onChange={handleTextChange}
            style={{
              backgroundColor: props.mode === `dark` ? `grey` : `white`,
              color: props.mode === `dark` ? `white` : `black`,
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary btn-outline-success"
          onClick={handleUpClick}
        >
          Convert into Upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert into Lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          CLEAR
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReviseClick}>
          Revise your TEXT
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === `dark` ? `white` : `black`,
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p> {text} </p>
      </div>
    </>
  );
}
