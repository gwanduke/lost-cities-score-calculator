import React from "react";
import "./{{name}}.scss";
import PropTypes from "prop-types";

const {{name}} = ({ text, onClick }) => {
  return (
    <div className="{{name}}" onClick={onClick}>
      {text}
    </div>
  );
};

{{name}}.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default {{name}};
