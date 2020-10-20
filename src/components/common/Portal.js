import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Portal = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const div = el.current;
    modalRoot.appendChild(div);

    return () => {
      modalRoot.removeChild(div);
    };
  }, []);

  return ReactDOM.createPortal(children, el.current);
};

export default Portal;
