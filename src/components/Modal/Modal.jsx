import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalElement = document.getElementById("modal");
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {children}
    </div>,
    modalElement,
  );
};

export { Modal };
