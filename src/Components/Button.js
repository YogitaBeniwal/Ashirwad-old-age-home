// Button.js

import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  href, // Add href as a prop
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a
      href={href} // Use href here
      className="btn-mobile"
      target="_blank" // Optional: Opens link in a new tab
      rel="noopener noreferrer" // Security measure when using target="_blank"
    >
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
