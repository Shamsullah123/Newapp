import "./App.css";
import Person from "./Person/Person";
import { Component, useState } from "react";
import person from "./Person/Person";
import { render } from "@testing-library/react";
import Header from "./HeaderComponent/Header";
import { Todolist } from "./HeaderComponent/todolist";
import { Footer } from "./HeaderComponent/Footer";
import Textarea from "./HeaderComponent/Textarea";
import About from "./HeaderComponent/About";
import Altert from "./HeaderComponent/Altert";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState(`light`); // whether dark mode is enable or not
  const [altert, setaltert] = useState(null);
  const showaltert = (message, type) => {
    setaltert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setaltert(null);
  }, 1500);
  const toggleMode = () => {
    if (mode === `light`) {
      setmode(`dark`);
      document.body.style.backgroundColor = `grey`;
      showaltert("Dark Mode has been enabled", "success");
      document.title = "TextUtile-Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtile is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtile Install Now";
      // }, 1500);
    } else {
      setmode(`light`);
      document.body.style.backgroundColor = `white`;
      showaltert("Light Mode has been enabled", "success");
      document.title = "TextUtile-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Header title="My Text App" mode={mode} toggleMode={toggleMode} />;
        <Altert alert={altert} />
        <Todolist />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Textarea
                showaltert={showaltert}
                heading="Enter Text to Analized"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
