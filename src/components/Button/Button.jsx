import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, onClick, path }) => {
  const base = "btn ";

  const style = {
    primary_btn: base + "primary_btn",
    danger_btn: base + "danger_btn",
    secondary_btn: base + "secondary_btn",
    tertiary_btn: base + "tertiary_btn",
  };

  if (path) {
    return (
      <Link to={path} className={style[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
