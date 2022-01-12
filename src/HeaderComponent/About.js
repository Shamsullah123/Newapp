import React, { useState } from "react";

export default function About() {
  const [MyStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [myBtn, setmyBtn] = useState("Enable Dark Mode");

  const shams = () => {
    console.log("Enbale Dark Mode");
    if (MyStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setmyBtn("Enable Light Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setmyBtn("Enable Dark Mode");
    }
  };

  return (
    <div Class="container my-3" style={MyStyle}>
      <h1>About Us</h1>
      <div Class="accordion" id="accordionExample" style={MyStyle}>
        <div Class="accordion-item">
          <h2 Class="accordion-header" id="headingOne">
            <button
              Class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={MyStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            Class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div Class="accordion-body" style={MyStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div Class="accordion-item" style={MyStyle}>
          <h2 Class="accordion-header" id="headingTwo">
            <button
              Class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={MyStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            Class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div Class="accordion-body" style={MyStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div Class="accordion-item">
          <h2 Class="accordion-header" id="headingThree">
            <button
              Class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={MyStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            Class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div Class="accordion-body" style={MyStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div ClassName="container my-3">
        <buttton onClick={shams} type="button" Class="btn btn-primary ">
          {myBtn}
        </buttton>
      </div>
    </div>
  );
}
