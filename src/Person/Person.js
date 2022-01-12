import { props } from "bluebird";
import React from "react";

const person = (props) => {
  return (
    <div>
      <h1>
        My Name is {props.name} and I am {props.age} year old !
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
