import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = ({ type, label }) => {
  return (
    <div class="wrapper">
      <div class="group">
        <input type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name</label>
      </div>
    </div>
  );
};

Input.PropTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};
Input.defaultProps = {
  type: "text",
  label: "Name",
};
