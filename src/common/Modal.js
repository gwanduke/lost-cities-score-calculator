import React from "react";
import Portal from "./Portal";

const Modal = ({ title, children }) => {
  return (
    <Portal>
      <div className="Modal">
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
